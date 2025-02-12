import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PendingCard from "./PendingCard";

const PendingAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const [pendingAssignments, setPendingAssignments] = useState([]);

  useEffect(() => {
    fetchPendingAssignments();
  }, []);

  const fetchPendingAssignments = async () => {
    const { data } = await axiosSecure.get("/pendingAssignments");
    setPendingAssignments(data);
  };

  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center mb-4 ">
        Pending Assignments
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Assignments submitted by students that are yet to be marked.
      </p>
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm md:text-base table-auto border-collapse">
          <thead className="bg-[#D4BEE4] text-black">
            <tr>
              <th className="py-4 px-6 text-left">#</th>
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6 text-left">Marks</th>
              <th className="py-4 px-6 text-left">Submitted By</th>
              <th className="py-4 px-6 text-left">Give Mark</th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments.length > 0 ? (
              pendingAssignments.map((assignment, index) => (
                <PendingCard
                  key={index}
                  assignment={assignment}
                  index={index}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-6 px-4 text-center text-gray-500 font-medium"
                >
                  No pending assignments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssignment;

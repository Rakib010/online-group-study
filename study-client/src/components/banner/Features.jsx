import {
  FaTasks,
  FaUsers,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Key Features</h2>
        <p className="mb-8">
          Explore the exciting features that make group study engaging and
          productive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaTasks />,
              title: "Create Assignments",
              desc: "Easily create and share assignments with your friends to enhance collaborative learning.",
            },
            {
              icon: <FaUsers />,
              title: "Connect with Friends",
              desc: "Every registered user becomes your friend, enabling seamless group collaboration.",
            },
            {
              icon: <FaGraduationCap />,
              title: "Grade Assignments",
              desc: "Review and grade your friends’ assignments to help each other improve and grow.",
            },
            {
              icon: <FaChalkboardTeacher />,
              title: "Free to Use",
              desc: "Enjoy all features for free and focus on learning without any cost barriers.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 border flex flex-col items-center text-center"
            >
              <div className="flex justify-center items-center text-teal-500 text-5xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

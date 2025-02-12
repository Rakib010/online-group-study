import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaBars } from "react-icons/fa";
import ToggleTheme from "../Toggle/Toggle";

const Navbar = () => {
  const { user, handleLogOut } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 shadow-md bg-[#D4BEE4]">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Group Study
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-teal-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/assignments" className="hover:text-teal-500 transition">
              Assignments
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/blog" className="hover:text-teal-500 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/pendingAssignment"
                  className="hover:text-teal-500 transition"
                >
                  Pending Assignments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-500 transition">
                  Contact
                </Link>
              </li>
            </>
          )}
          {!user && (
            <li>
              <Link to="/login" className="hover:text-teal-500 transition">
                Login
              </Link>
            </li>
          )}
        </ul>
        <ToggleTheme />

        {/* User Profile & Logout */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative group">
              <button className="flex items-center">
                <img
                  title={user?.displayName}
                  src={user?.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
              </button>
              <ul className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white shadow-md rounded-lg">
                <li>
                  <Link
                    to="/createAssignment"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Create Assignments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myAssignments"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Assignments
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary hidden">
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <label htmlFor="mobile-menu" className="cursor-pointer">
              <FaBars className="text-xl" />
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <input type="checkbox" id="mobile-menu" className="hidden peer" />
      <div className="hidden peer-checked:block absolute top-16 left-0 w-full bg-white shadow-md lg:hidden">
        <ul className="flex flex-col space-y-2 p-4 font-medium">
          <li>
            <Link to="/" className="hover:text-teal-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/assignments" className="hover:text-teal-500 transition">
              Assignments
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link
                  to="/pendingAssignment"
                  className="hover:text-teal-500 transition"
                >
                  Pending Assignments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-500 transition">
                  Contact
                </Link>
              </li>
            </>
          )}
          {!user && (
            <li>
              <Link to="/login" className="hover:text-teal-500 transition">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

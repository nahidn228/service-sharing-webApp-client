import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/images/logooooo.png";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check and set the theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.body.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.body.classList.toggle("dark", newTheme);
  };

  return (
    <div className="navbar bg-white bg-transparent backdrop-blur-md shadow-md sticky top-0 z-50 max-w-screen-xl mx-auto">
      {/* Logo */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-black dark:text-gray-200"
        >
          <img className="w-14 h-auto" src={logo} alt="Logo" />
          <span className="text-xl font-bold hidden md:flex">
            <Typewriter
              words={["Digital World Technology"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="flex-none flex items-center gap-0 md:gap-4">
        {/* Theme Toggle */}
        <div>
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={handleThemeToggle}
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        {/* Links */}
        <ul className="menu menu-horizontal px-1 text-black dark:text-gray-200 flex items-center gap-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-600 transition-colors duration-300 ${
                  isActive ? "bg-neutral font-semibold text-blue-500" : ""
                } hidden md:flex btn btn-outline btn-info btn-sm md:btn-md`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-blue-600 transition-colors duration-300 ${
                  isActive ? "bg-neutral font-semibold text-blue-500" : ""
                } btn btn-outline btn-info btn-sm md:btn-md`
              }
            >
              Services
            </NavLink>
          </li>

          {!user && (
            <li>
              <NavLink
                to="/login"
                className="btn btn-sm md:btn-md bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 font-medium shadow-md"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>

        {/* User Dropdown */}
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button">
              <div className="btn btn-outline btn-info btn-sm md:btn-md text-blue-600 hover:text-blue-700">
                Dashboard
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 text-black dark:text-gray-200"
            >
              <li>
                <NavLink to="/add-service">Add Service</NavLink>
              </li>
              <li>
                <NavLink to="/manageService">Manage Service</NavLink>
              </li>
              <li>
                <NavLink to="/my-BookedService">Booked Service</NavLink>
              </li>
              <li>
                <NavLink to="/service-requests">Service To-Do</NavLink>
              </li>
              <li className="mt-2 ">
                <button
                  onClick={logOut}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 font-medium transition-colors duration-300"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* User Profile */}
        {user && (
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div
              title={user?.displayName}
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            >
              <img
                referrerPolicy="no-referrer"
                alt="User Profile"
                src={user?.photoURL}
              />
            </div>
          </div>
        )}

        {user && (
          <div>
            <button
              onClick={logOut}
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 font-medium hidden lg:flex transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import navImg from "../assets/images/user.png";
import { AuthContext } from "./../providers/AuthProvider";

// import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/images/logooooo.png";

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

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Sign out success");
        Swal.fire({
          title: `Successfully Logged-out`,
          text: `${user?.displayName} You are successfully Logged-out`,
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.body.classList.toggle("dark", newTheme);
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold transition duration-300"
              : "hover:text-blue-500 font-semibold transition duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold transition duration-300"
              : "hover:text-blue-500 font-semibold transition duration-300"
          }
        >
          All Services
        </NavLink>
      </li>

      {user && (
        <li className="dropdown z-10">
          <div tabIndex={0} role="button" className="text-black font-bold">
            Dashboard
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/add-service"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold transition duration-300"
                    : "hover:text-blue-500 font-semibold transition duration-300"
                }
              >
                Add Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manageService"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold transition duration-300"
                    : "hover:text-blue-500 font-semibold transition duration-300"
                }
              >
                Manage Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-BookedService"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold transition duration-300"
                    : "hover:text-blue-500 font-semibold transition duration-300"
                }
              >
                Booked Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service-requests"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold transition duration-300"
                    : "hover:text-blue-500 font-semibold transition duration-300"
                }
              >
                Service To-Do
              </NavLink>
            </li>
          </ul>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar  text-black shadow-lg bg-white bg-transparent backdrop-blur-md  sticky top-0 z-50 max-w-screen-xl mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-black lg:hidden p-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box mt-3 w-52 p-2 shadow-lg z-50"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink
          to="/"
          className=" normal-case text-lg md:text-2xl font-extrabold text-black hover:text-blue-500 flex items-center "
        >
          <img className="w-14 h-auto hidden md:flex" src={logo} alt="Logo" />
          DW technology
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-3">
        {/* Toggle Theme */}
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

        <div className="flex gap-4 items-center">
          {user && user?.photoURL ? (
            <div className="relative inline-block group">
              {/* User img */}
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />
              {/* hover user name */}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {user?.displayName}
              </span>
            </div>
          ) : (
            <div className="relative inline-block group">
              {/* default image */}
              <img className="rounded-full" src={navImg} alt="" />
              {/* hover user name */}
            </div>
          )}
          {user && (
            <>
              {/* <NavLink
              to="/login"
              className="btn btn-sm bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 border-none"
            >
              Login
            </NavLink> */}

              <button
                onClick={handleSignOut}
                className="btn btn-sm bg-gradient-to-r from-red-500 to-orange-600 text-white hover:bg-red-400 transition-all duration-300 transform hover:scale-105 border-none"
              >
                Logout
              </button>
            </>
          )}
          {!user && (
            <NavLink
              to="/register"
              className="btn btn-sm bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 border-none"
            >
              Register
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

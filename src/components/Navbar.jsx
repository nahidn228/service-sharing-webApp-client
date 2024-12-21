import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo1.png";
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
    // Store the selected theme in localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    // Toggle the dark mode class on the body element
    document.body.classList.toggle("dark", newTheme);
  };
  return (
    <div className="navbar bg-white  shadow-sm container px-4 mx-auto">
      <div className="flex-1 text-black">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-10 h-auto" src={logo} alt="" />
          <span className="font-bold">Digital World</span>
        </Link>
      </div>
      <div className="flex-none">
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
        <ul className="menu menu-horizontal px-1 text-black">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">All Jobs</Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black"
            >
              <li>
                <Link to="/add-job" className="justify-between">
                  Add Job
                </Link>
              </li>
              <li>
                <Link to="/my-posted-jobs">My Posted Jobs</Link>
              </li>
              <li>
                <Link to="/my-bids">My Bids</Link>
              </li>
              <li>
                <Link to="/bid-requests">Bid Requests</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center text-gray-800"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

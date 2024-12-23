import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/images/logooooo.png";

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm">
      <hr />
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo and App Name */}
          <div className="flex gap-2 items-center text-black font-semibold">
            <img className="w-14 h-auto" src={logo} alt="Logo" />
            <span className="text-xl font-bold text-blue-500">
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
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {["Home", "About", "Teams", "Privacy", "Cookies"].map(
              (link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
          </p>

          {/* Social Links with Icons */}
          <div className="flex -mx-2">
            <a
              href="https://www.reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-red-500"
              aria-label="Reddit"
            >
              <FaReddit className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-black"
              aria-label="Github"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

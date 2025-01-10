import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const NewFooter = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {/* Column 1: About Section */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1
            className="text-xl md:text-2xl font-extrabold tracking-wide"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
             <Typewriter
                words={["Digital World Technology"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            
          </h1>
          <p className="text-black py-4">
            Digital World Technology offers cutting-edge digital solutions for businesses and individuals. We specialize in web development, app creation, and digital marketing.
          </p>
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact our support team
          </a>
        </div>

        {/* Column 2: Navigation Links */}
        <div data-aos="fade-up" data-aos-duration="1200">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-black">
            <li>
              <a
                href="/"
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-blue-500 transition duration-300"
              >
                All Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media and Subscription */}
        <div data-aos="fade-up" data-aos-duration="1400">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="text-black hover:text-blue-800 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
              className="text-black hover:text-blue-800 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              aria-label="Twitter"
              className="text-black hover:text-blue-800 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.tiktok.com/en/"
              target="_blank"
              aria-label="TikTok"
              className="text-black hover:text-blue-800 transition duration-300"
            >
              <FaTiktok size={24} />
            </a>
          </div>

          {/* Email Subscription */}
          <div className="mt-6">
            <div className="flex">
              <input
                type="email"
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300">
                <SiMinutemailer />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="my-8 border-t border-gray-200"></div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-black px-6">
        <p>© {new Date().getFullYear()} DW Technology. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;

import { FaLaptopCode, FaLaptopHouse } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="py-10 bg-blue-50">
      <div className="text-center">
        <p className="text-blue-600 font-semibold mb-4 tracking-widest">
          SERVICES
        </p>
        <h2 className="text-3xl font-bold text-blue-900 mb-8">What We Do</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Web Design */}
          <div className="shadow-lg rounded-xl p-8 flex flex-col items-center text-center bg-white hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6 text-6xl bg-blue-100 text-blue-600 shadow-inner">
              <FaLaptopHouse />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Web Design
            </h3>
            <p className="text-gray-600">
              Our team consists of experienced and certified professionals.
            </p>
            <Link to="/services" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-colors duration-300">
              Learn More
            </Link>
          </div>
          {/* Web Development */}
          <div className="shadow-lg rounded-xl p-8 flex flex-col items-center text-center bg-white hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6 text-6xl bg-blue-100 text-blue-600 shadow-inner">
              <FaLaptopCode />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Web Development
            </h3>
            <p className="text-gray-600">
              Our team consists of experienced and certified professionals.
            </p>
            <Link to="/services" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-colors duration-300">
              Learn More
            </Link>
          </div>
          {/* Graphic Design */}
          <div className="shadow-lg rounded-xl p-8 flex flex-col items-center text-center bg-white hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6 text-6xl bg-blue-100 text-blue-600 shadow-inner">
              <SiAltiumdesigner />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
            Graphic Design
            </h3>
            <p className="text-gray-600">
              Our team consists of experienced and certified professionals.
            </p>
            <Link to="/services" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-colors duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

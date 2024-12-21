/* eslint-disable react/prop-types */
import { FaClock, FaDollarSign, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <Link
      to={`/service/1`}
      className="w-full max-w-sm p-5 bg-white dark:bg-gray-800 rounded-md shadow-md hover:scale-[1.05] hover:shadow-lg transition-transform "
    >
      {/* Header */}
      <div className="flex items-center justify-between ">
        <span className="flex items-center gap-1 text-xs font-light text-gray-600 dark:text-gray-300">
          <FaClock className="w-4 h-4 text-blue-500" />
          Deadline: 28/05/2024
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-300 uppercase">
          Web Development
        </span>
      </div>

      {/* Main Content */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black dark:text-gray-200">
          E-commerce Website Development
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Dramatically redefine bleeding-edge infrastructures after
          client-focused value. Intrinsicly seize user-centric partnerships
          through out-of-the-box architectures.
        </p>

        {/* Pricing and Bids */}
        <div className="mt-4">
          <p className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
            <FaDollarSign className="text-green-500" />
            Range: $500 - $600
          </p>
          <p className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
            <FaTag className="text-yellow-500" />
            Total Bids: 0
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

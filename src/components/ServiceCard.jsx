/* eslint-disable react/prop-types */
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { FaClock, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <Link
      to={`/service/${service?._id}`}
      className="w-full max-w-2xl mx-auto p-5  rounded-md shadow-md hover:scale-[1.05] hover:shadow-lg transition-transform"
    >
      {/* Service Image */}
      <img
        src={service?.serviceImg}
        alt={service?.name}
        className="w-full h-56 object-cover rounded-md mb-4"
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        {service?.deadline && (
          <span className="flex items-center gap-1 text-xs font-light text-black ">
            <FaClock className="w-4 h-4 text-blue-500" />
            Deadline: {format(new Date(service.deadline), "P")}
          </span>
        )}

        <span className="px-3 py-1 text-[8px] text-blue-800 bg-blue-200 rounded-full   uppercase">
          {service?.category}
        </span>
      </div>

      {/* Main Content */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold text-black ">
          {service?.name?.length > 20
            ? `${service?.name.slice(0, 18)}...`
            : service?.name}
        </h1>
        <p className="mt-2 text-sm text-black ">
          {service?.description?.length > 60
            ? `${service?.description.slice(0, 60)}...`
            : service?.description}
        </p>

        {/* Pricing  */}
        <div className="mt-4 flex justify-between items-center">
          <p className="flex items-center gap-2 text-sm font-bold text-black ">
            <FaDollarSign className="text-green-500" />
            {service?.price}
          </p>
        </div>

        {/* Provider Info */}
        <div className="flex items-center mt-4">
          <img
            src={service?.buyer?.photo}
            alt={service?.buyer?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <p className="text-sm text-black ">{service?.buyer?.name}</p>
            <p className="text-xs text-black">{service?.area}</p>
          </div>
        </div>

        {/* View Detail Button */}
        <div className="mt-4">
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            View Detail
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

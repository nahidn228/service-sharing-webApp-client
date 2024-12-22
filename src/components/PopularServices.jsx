import axios from "axios";
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchAllServices = async () => {
      const { data } = await axios.get(
        `  ${import.meta.env.VITE_API_URL}/popular-services`
      );
      setServices(data);
    };
    fetchAllServices();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Popular Services</h2>
        <p className="text-gray-600 mt-2">
          Explore our most popular services tailored for your needs.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Service Image */}
            <img
              src={service?.serviceImg}
              alt={service?.name}
              className="w-full lg:w-1/3 object-cover"
            />
            {/* Service Details */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service?.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {service?.description.length > 100
                    ? service?.description.substring(0, 100) + "..."
                    : service?.description}
                </p>
              </div>
              {/* Footer Section */}
              <div className="mt-4 flex justify-between items-center">
                {/* Provider Info */}
                <div className="flex items-center">
                  <img
                    src={service?.buyer?.photo}
                    alt={service?.buyer?.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <span className="text-sm text-gray-700">
                    {service?.buyer?.name}
                  </span>
                </div>
                {/* Price */}
                <span className="flex items-center  text-lg font-bold text-gray-800">
                  <FaDollarSign className="text-green-500" /> {service.price}
                </span>
              </div>
              <div className="mt-4 ">
                {/* View Details Button */}
                <Link to={`/service/${service?._id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show All Button */}
      <div className="text-center mt-8">
        <Link to="/services">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg text-lg hover:bg-gray-700 transition">
            Show All
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;

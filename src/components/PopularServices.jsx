import axios from "axios";
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/popular-services`
        );
        setServices(data);
      } catch (err) {
        setError("Failed to fetch popular services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllServices();
  }, []);

  const buttonClasses =
    "px-4 py-2 rounded-lg text-sm transition text-white focus:ring-2 focus:ring-offset-2 focus:outline-none";

  return (
    <section className="py-10">
      {/* Header */}
      <div className="text-center my-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Popular Services
        </h2>
        <p className="text-blue-600 font-semibold mb-8 tracking-widest">
          Explore our most popular services tailored for your needs.
        </p>
       
      </div>

      {/* Loading or Error State */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Services List */}
      {!loading && !error && (
        <div className="grid gap-6 lg:grid-cols-2 my-10">
          {services.map((service) => (
            <article
              key={service._id}
              className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Service Image */}
              <img
                src={service.serviceImg || "/placeholder-image.jpg"}
                alt={service.name || "Service Image"}
                className="w-full lg:w-1/3 object-cover"
              />

              {/* Service Details */}
              <div className="p-4 flex flex-col justify-between">
                {/* Title and Description */}
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    {service.name || "Unnamed Service"}
                  </h3>
                  <p className="text-black mt-2">
                    {service.description?.length > 100
                      ? service.description.substring(0, 100) + "..."
                      : service.description || "No description available."}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="mt-4 flex justify-between items-center">
                  {/* Provider Info */}
                  <div className="flex items-center">
                    <img
                      src={service.buyer?.photo || "/placeholder-avatar.jpg"}
                      alt={service.buyer?.name || "Buyer"}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <span className="text-sm text-black">
                      {service.buyer?.name || "Anonymous Buyer"}
                    </span>
                  </div>
                  {/* Price */}
                  <span className="flex items-center text-lg font-bold text-black">
                    <FaDollarSign className="text-green-500" /> {service.price}
                  </span>
                </div>

                {/* View Details Button */}
                <div className="mt-4">
                  <Link to={`/service/${service._id}`}>
                    <button
                      className={`bg-blue-600 hover:bg-blue-700 ${buttonClasses}`}
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Show All Button */}
      {!loading && !error && (
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 shadow-md transition-transform transform hover:scale-105">
              Show All
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default PopularServices;

import { Link } from "react-router-dom";

const PopularServices = () => {
  const services = [
    {
      id: 1,
      image: "https://via.placeholder.com/150", // Replace with actual service image URL
      name: "Web Development",
      description:
        "Get your websites professionally built with modern technologies.",
      providerImage: "https://via.placeholder.com/50", // Replace with provider image URL
      providerName: "John Doe",
      price: "$1200",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Graphic Design",
      description: "Unique and stunning visuals for your brand.",
      providerImage: "https://via.placeholder.com/50",
      providerName: "Jane Smith",
      price: "$800",
    },
    // Add up to 6 services
  ];

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
            key={service.id}
            className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full lg:w-1/3 object-cover"
            />
            {/* Service Details */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {service.description.length > 100
                    ? service.description.substring(0, 100) + "..."
                    : service.description}
                </p>
              </div>
              {/* Footer Section */}
              <div className="mt-4 flex justify-between items-center">
                {/* Provider Info */}
                <div className="flex items-center">
                  <img
                    src={service.providerImage}
                    alt={service.providerName}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <span className="text-sm text-gray-700">
                    {service.providerName}
                  </span>
                </div>
                {/* Price */}
                <span className="text-lg font-bold text-gray-800">
                  {service.price}
                </span>
              </div>
              <div className="mt-4">
                {/* View Details Button */}
                <Link  to={`/service/1`}><button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                  View Details
                </button></Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show All Button */}
      <div className="text-center mt-8">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg text-lg hover:bg-gray-700 transition">
          Show All
        </button>
      </div>
    </div>
  );
};

export default PopularServices;

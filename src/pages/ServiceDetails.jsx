import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ServiceDetails = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [service, setService] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchOneService = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/service/${id}`
      );
      setService(data);
    };
    fetchOneService();
  }, [id]);

  const handleBookNow = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-10 items-center min-h-[calc(100vh-306px)] md:max-w-screen-2xl mx-auto px-4 py-10 bg-gray-50">
      {/* Service Details */}
      <div className="flex-1 px-6 py-8 bg-white rounded-lg shadow-lg md:min-h-[350px] hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-black">
            <span className="font-semibold text-black">Deadline:</span>{" "}
            {new Date(service.deadline).toLocaleDateString()}
          </span>
          <span className="px-4 py-1 text-xs text-white uppercase bg-blue-500 rounded-full shadow-sm">
            {service.category}
          </span>
        </div>

        <div className="mt-4">
          <img
            src={service.serviceImg}
            alt="Service"
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <h1 className="text-3xl font-semibold text-black">{service.name}</h1>
          <p className="mt-4 text-base leading-6 text-black">
            {service.description}
          </p>

          <p className="mt-10 text-sm font-bold text-black">
            Provider Details:
          </p>
          <div className="flex items-center gap-5 mt-4">
            <div>
              <p className="text-sm text-black">
                <span className="font-medium text-black">Name:</span>{" "}
                {service.buyer?.name}
              </p>
              <p className="text-sm text-black">
                <span className="font-medium text-black">Email:</span>{" "}
                {service.buyer?.email}
              </p>
              <p className=" text-sm font-medium text-black">
                <span className="font-semibold">Location:</span> {service.area}
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-16 h-16 border-2 border-blue-500 shadow-lg">
              <img
                referrerPolicy="no-referrer"
                src={service.buyer?.photo}
                alt="Provider"
              />
            </div>
          </div>
          <p className="mt-6 text-xl font-bold text-blue-600">
            Price: ${service.price}
          </p>
        </div>
      </div>

      {/* Booking Button */}
      <div className="flex justify-center">
        <button
          onClick={handleBookNow}
          className="px-6 py-3 text-white font-semibold bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Book Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-11/12 max-w-3xl p-8 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-2xl font-semibold text-black capitalize mb-6">
              Book this
              <span className="text-blue-600 font-bold">
                <Typewriter
                  words={[" Service"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <form>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-black">
                    Service ID
                  </label>
                  <input
                    type="text"
                    value={service._id}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">
                    Service Name
                  </label>
                  <input
                    type="text"
                    value={service.name}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">
                    Provider Email
                  </label>
                  <input
                    type="text"
                    value={service.buyer?.email}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">
                    Provider Name
                  </label>
                  <input
                    type="text"
                    value={service.buyer?.name}
                    disabled
                    className="block w-full px-4 py-2 mt-2 text-black bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">
                    Service Taking Date
                  </label>
                  <DatePicker
                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">
                    Special Instruction
                  </label>
                  <textarea
                    placeholder="Enter special instructions here..."
                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-6 text-right">
                <button
                  type="submit"
                  className="px-6 py-3 text-white font-semibold bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;

import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ServiceDetails = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-col gap-10 items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto px-4 py-10 bg-gray-50">
      {/* Job Details */}
      <div className="flex-1 px-6 py-8 bg-white rounded-lg shadow-lg md:min-h-[350px] hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-black">
            <span className="font-semibold text-black">Deadline:</span>{" "}
            28/05/2024
          </span>
          <span className="px-4 py-1 text-xs text-white uppercase bg-blue-500 rounded-full shadow-sm">
            Web Development
          </span>
        </div>

        <div className="mt-4">
          <h1 className="text-3xl font-semibold text-black">
            Web Development
          </h1>

          <p className="mt-4 text-base leading-6 text-black">
            Dramatically redefine bleeding-edge infrastructures after
            client-focused value. Intrinsicly seize user-centric partnerships
            through out-of-the-box architectures. Distinctively.
          </p>
          <p className="mt-6 text-sm font-bold text-black">Buyer Details:</p>
          <div className="flex items-center gap-5 mt-4">
            <div>
              <p className="text-sm text-black">
                <span className="font-medium text-black">Name:</span>{" "}
                Programming-Hero Instructors
              </p>
              <p className="text-sm text-black">
                <span className="font-medium text-black">Email:</span>{" "}
                instructors@programming-hero.com
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-16 h-16 border-2 border-blue-500 shadow-lg">
              <img
                referrerPolicy="no-referrer"
                src="https://i.ibb.co.com/qsfs2TW/Ix-I18-R8-Y-400x400.jpg"
                alt="Buyer"
              />
            </div>
          </div>
          <p className="mt-6 text-xl font-bold text-blue-600">
            Range: $500 - $600
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className="p-8 w-full bg-white rounded-lg shadow-lg flex-1 md:min-h-[350px] hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-black capitalize mb-6">
          Book a Service
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                className="text-sm font-medium text-black"
                htmlFor="price"
              >
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                required
                placeholder="$ Enter your price"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium text-black"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                value="user@example.com"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium text-black"
                htmlFor="comment"
              >
                Comment
              </label>
              <input
                id="comment"
                name="comment"
                type="text"
                placeholder="Write your comments here"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black">
                Deadline
              </label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-6 py-3 text-white font-semibold bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Book Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ServiceDetails;

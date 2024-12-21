import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddService = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <section className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          Post a Job
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          Fill out the details below to post a new service job.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="job_title">
                Job Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter job title"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                name="email"
                type="email"
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Deadline</label>
              <DatePicker
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              >
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Minimum Price */}
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="min_price">
                Minimum Price
              </label>
              <input
                id="min_price"
                name="min_price"
                type="number"
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter minimum price"
              />
            </div>

            {/* Maximum Price */}
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="max_price">
                Maximum Price
              </label>
              <input
                id="max_price"
                name="max_price"
                type="number"
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter maximum price"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Describe the job details..."
            ></textarea>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Post Job
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddService;

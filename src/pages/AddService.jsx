import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const AddService = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.title.value;
    const serviceImg = form.serviceImg.value;
    const deadline = startDate;
    const category = form.category.value;
    const price = form.min_price.value;
    const area = form.area.value;
    const description = form.description.value;

    const formData = {
      name,
      area,
      serviceImg,
      buyer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      deadline,
      category,
      price,
      description,
    };

    console.log(formData);

    try {
      // make a post request
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-service`,
        formData,
        { withCredentials: true }
      );
      console.log(data);
      form.reset();
      toast.success("Service Added Successfully!!!");
      navigate("/manageService");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add your Service Here - Digital World Technology</title>
        <link rel="canonical" href="https://fullstackservice1.web.app" />
      </Helmet>
      <section className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">Add a Service</h2>
        <p className="text-blue-600 text-center font-semibold mb-8 tracking-widest">
          Fill out the details below to post a new service.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* service Title */}
            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="service"
              >
                Service Name
              </label>
              <input
                id="service_title"
                name="title"
                type="text"
                required
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter Service title"
              />
            </div>

            {/* Image URL of the Service  */}
            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="emailAddress"
              >
                Image URL of the Service
              </label>
              <input
                id="emailAddress"
                name="serviceImg"
                required
                type="url"
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter your Image URL of the Service "
              />
            </div>
            {/* Deadline */}
            <div className="w-full">
              <label className="block text-sm font-medium text-black ">
                Deadline
              </label>
              <div className="w-full">
                <DatePicker
                  className="min-w-full  mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="category"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                required
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              >
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/*  Price */}
            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="min_price"
              >
                Price
              </label>
              <input
                id="min_price"
                name="min_price"
                type="number"
                required
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter minimum price"
              />
            </div>

            {/* Service Area */}
            <div>
              <label
                className="block text-sm font-medium text-black"
                htmlFor="area"
              >
                Service Area
              </label>
              <select
                name="area"
                id="area"
                required
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Khulna">Khulna</option>
                <option value="Barisal">Barisal</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="my-4">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows="4"
              className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
              placeholder="Describe the Service details..."
            ></textarea>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Add Service
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddService;

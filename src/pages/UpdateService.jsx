import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
const AddService = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [service, setService] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOneService = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/service/${id}`
      );
      setService(data);
    };
    fetchOneService();
  }, [id]);

  console.log(service);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.title.value;
    const serviceImg = form.serviceImg.value;
    const deadline = startDate;
    const category = form.category.value;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;
    const formData = {
      name,
      area,
      serviceImg,
      deadline,
      category,
      price,
      description,
    };
    console.log(formData);
    try {
      // make a put request
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-service/${id}`,
        formData
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update your Service Here - Digital World Technology</title>
        <link rel="canonical" href="" />
      </Helmet>
      <section className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          Update Your Service:{" "}
          <span className="text-blue-500">{service.name}</span>{" "}
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          Fill out the details below to update your service.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* service Title */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="job_title"
              >
                Service Name
              </label>
              <input
                id="service_title"
                name="title"
                type="text"
                defaultValue={service?.name}
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter Service title"
              />
            </div>

            {/* Image URL of the Service  */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="emailAddress"
              >
                Image URL of the Service
              </label>
              <input
                id="serviceImg"
                name="serviceImg"
                defaultValue={service?.serviceImg}
                type="url"
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter your Image URL of the Service "
              />
            </div>
            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-600 ">
                Deadline
              </label>
              <div className="w-full">
                {service?.deadline && (
                  <DatePicker
                    className="w-full  mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                    selected={startDate}
                    value={format(new Date(service.deadline), "P")}
                    onChange={(date) => setStartDate(date)}
                  />
                )}
              </div>
            </div>

            {/* Category */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="category"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                value={service?.category}
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
                className="block text-sm font-medium text-gray-600"
                htmlFor="price"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                defaultValue={service.price}
                type="number"
                className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                placeholder="Enter minimum price"
              />
            </div>

            {/* Service Area */}
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="area"
              >
                Service Area
              </label>
              <select
                name="area"
                id="area"
                value={service.area}
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
              className="block text-sm font-medium text-gray-600"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={service.description}
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
              Update Service
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddService;

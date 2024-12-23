import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const ServiceRequests = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    fetchAllServices();
  }, [user]);
  const handleStatusChange = async (id) => {
    if (!filter) {
      toast.error("Please select a status");
      return;
    }

    const handleUpdate = async () => {
      try {
        const { data } = await axios.put(
          `${import.meta.env.VITE_API_URL}/update-status/${id}`,
          { status: filter },
          { withCredentials: true }
        );
        console.log(data);
        console.log(filter);

        fetchAllServices();
        toast.dismiss(); // Close the toast after successful operation
        toast.success(`Successfully Status Updated as '${filter}' !!!`);
      } catch (err) {
        console.log(err);
        toast.dismiss(); // Close the toast if there's an error
        toast.error(err.message);
      }
    };

    const handleCancel = () => {
      toast.dismiss(); // Close the toast
    };

    // Show a custom toast with Update and Cancel buttons
    toast.custom((t) => (
      <div
        className={`flex flex-col gap-3 items-start justify-between p-4 rounded-lg shadow-lg ${
          t.visible ? "animate-enter" : "animate-leave"
        } bg-gray-800 border border-gray-700 text-white`}
      >
        <div>
          <p className="text-base font-semibold">Update Status</p>
          <p className="text-sm text-gray-400">
            Are you sure you want to change the status to{" "}
            <span className="text-green-400">{filter}</span>?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleUpdate}
            className="px-4 py-1 text-sm font-medium bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-sm"
          >
            Update
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-1 text-sm font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };
  const fetchAllServices = async () => {
    const { data } = await axios.get(
      `  ${import.meta.env.VITE_API_URL}/booked-services/${user?.email}`,
      { withCredentials: true }
    );
    setServices(data);
  };
  fetchAllServices();

  // console.log(services);
  return (
    <section className="container px-4 mx-auto py-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Service To-Do - Digital World Technology</title>
        <link rel="canonical" href="https://fullstackservice1.web.app" />
      </Helmet>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-black">Service To-Do</h2>
        <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {services.length} Requests
        </span>
      </div>

      {/* Table Section */}
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-white dark:bg-gray-800">
                  <tr>
                    {[
                      "Title",
                      "Email",
                      "Deadline",
                      "Price",
                      "Category",
                      "Status",
                      "Update Status",
                      "Actions",
                    ].map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-4 py-3.5 text-sm font-semibold text-left text-black dark:text-white"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                  {/* Table Row */}
                  {services.map((service) => (
                    <tr
                      key={service._id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="px-4 py-4 text-sm text-black dark:text-white whitespace-nowrap">
                        {service?.serviceName}
                      </td>
                      <td className="px-4 py-4 text-sm text-black dark:text-white whitespace-nowrap">
                        {service?.userEmail}
                      </td>
                      {service?.serviceTakingDate && (
                        <td className="px-4 py-4 text-sm text-black dark:text-white whitespace-nowrap">
                          {format(new Date(service.serviceTakingDate), "P")}
                        </td>
                      )}
                      <td className="px-4 py-4 text-sm text-black dark:text-white whitespace-nowrap">
                        ${service?.price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <span className="px-3 py-1 rounded-full text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 text-xs">
                          {service?.category}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div
                          className={`inline-flex items-center px-3 py-1 gap-x-2   ${
                            service.status === "Working" &&
                            "text-blue-500 bg-blue-100/60"
                          } ${
                            service.status === "Completed" &&
                            "text-green-500 bg-green-100/60"
                          } ${
                            service.status === "Pending" &&
                            "text-red-500 bg-red-100/60"
                          }   text-xs  rounded-full`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full bg-green-500`}
                          ></span>
                          <span className="text-sm font-medium">
                            {service?.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <select
                          name="status"
                          onChange={(e) => setFilter(e.target.value)}
                          id="status"
                          className="inline-flex items-center px-3 py-1 gap-x-2 text-yellow-500 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full "
                        >
                          <option value="">Filter By Category</option>
                          <option value="Pending">Pending</option>
                          <option value="Working">Working</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button
                          title="Mark Complete"
                          onClick={() => handleStatusChange(service?._id)}
                          className="text-black dark:text-white hover:text-red-500 dark:hover:text-red-400 transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRequests;

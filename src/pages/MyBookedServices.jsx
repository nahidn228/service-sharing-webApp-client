import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";

const MyBookedServices = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchAllServices = async () => {
      const { data } = await axios.get(
        `  ${import.meta.env.VITE_API_URL}/myBooked-services/${user?.email}`
      );
      setServices(data);
    };
    fetchAllServices();
  }, [user]);

  console.log(services);
  return (
    <section className="container px-4 mx-auto py-12">
       <Helmet>
        <meta charSet="utf-8" />
        <title>My Booked Service  - Digital World Technology</title>
        <link rel="canonical" href="https://fullstackservice1.web.app" />
      </Helmet>
      {/* Header Section */}
      <div className="flex items-center gap-x-3 mb-6">
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          My Booked Services
        </h2>
        <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full">
          {services.length} Booked
        </span>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {/* Table Header */}
          <thead className="">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-left text-black dark:text-white">
                Title
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-black dark:text-white">
                Deadline
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-black dark:text-white">
                Price
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-black dark:text-white">
                Category
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-black dark:text-white">
                Status
              </th>
              <th className="px-4 py-3 text-sm font-medium text-left text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {/* Row */}
            {services.map((service) => (
              <tr
                key={service._id}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <td className="px-4 py-4 text-sm text-black dark:text-white">
                  {service?.serviceName}
                </td>
                {service?.serviceTakingDate && (
                  <td className="px-4 py-4 text-sm text-black dark:text-white">
                    {format(new Date(service.serviceTakingDate), "P")}
                  </td>
                )}

                <td className="px-4 py-4 text-sm text-black dark:text-white">
                  ${service?.price}
                </td>
                <td className="px-4 py-4 text-sm">
                  <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                   {service?.category}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm">
                  <span className="inline-flex items-center px-3 py-1 gap-x-2 text-yellow-500 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                    {service?.serviceStatus}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm">
                  <button
                    title="Mark Complete"
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
    </section>
  );
};

export default MyBookedServices;

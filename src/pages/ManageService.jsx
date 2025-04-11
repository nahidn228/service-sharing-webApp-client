import axios from "axios";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../components/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const ManageService = () => {
  const { user } = useAuth();

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllServices = async () => {
      const { data } = await axios.get(
        `  ${import.meta.env.VITE_API_URL}/services/${user?.email}`,
        { withCredentials: true }
      );
      setServices(data);
      setIsLoading(false);
    };
    fetchAllServices();
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);
    const confirmDelete = async () => {
      // try {
      //   const { data } = await axios.get(
      //     `${import.meta.env.VITE_API_URL}/delete-service/${id}`,
      //     { withCredentials: true }
      //   );
      //   console.log(data);

      //   const updatedServices = services.filter(
      //     (service) => service._id !== id
      //   );
      //   setServices(updatedServices);
      //   toast.dismiss(); // Close the toast after successful deletion
      //   toast.success("Service Deleted Successfully!");
      // } catch (err) {
      //   console.log(err.message);
      //   toast.dismiss(); // Close the toast if there's an error
      //   toast.error(err.message);
      // }

      toast.dismiss();

      //Add this for testing
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You do not have permission to this action !",
      });
    };

    const cancelDelete = () => {
      toast.dismiss(); // Close the toast
    };

    // Show a custom toast with buttons
    toast.custom((t) => (
      <div
        className={`flex flex-col gap-3 items-start justify-between p-4 rounded-lg shadow-lg ${
          t.visible ? "animate-enter" : "animate-leave"
        } bg-gray-800 border border-gray-700 text-white`}
      >
        <div>
          <p className="text-base font-semibold">Delete Service</p>
          <p className="text-sm text-gray-400">
            Are you sure you want to delete this service? This action cannot be
            undone.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={confirmDelete}
            className="px-4 py-1 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-sm"
          >
            Delete
          </button>
          <button
            onClick={() => cancelDelete(t)}
            className="px-4 py-1 text-sm font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  {
    isLoading ? <LoadingSpinner></LoadingSpinner> : "";
  }

  return (
    <section className=" pt-12 bg-white container px-4 md:px-0 mx-auto   min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Service - Digital World Technology</title>
      </Helmet>
      <div className="flex items-center gap-x-3 px-2">
        <h2 className="text-lg font-medium text-black ">Manage Services</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {services.length} Services
        </span>
      </div>

      <div className="flex flex-col mt-6 pb-6 overflow-x-auto md:overflow-hidden">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full overflow-x-auto divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price </span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
                    >
                      Description
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {services.map((service) => (
                    <tr key={service._id}>
                      <td className="px-4 py-4 text-sm text-black  whitespace-nowrap">
                        {service.name}
                      </td>

                      {service?.deadline && (
                        <td className="px-4 py-4 text-sm text-black  whitespace-nowrap">
                          {new Date(service?.deadline).toLocaleDateString()}
                        </td>
                      )}

                      <td className="px-4 py-4 text-sm text-black  whitespace-nowrap">
                        ${service.price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className={`px-3 py-1  ${
                              service.category === "Web Development" &&
                              "text-blue-500 bg-blue-100/60"
                            } ${
                              service.category === "Graphics Design" &&
                              "text-green-500 bg-blue-100/60"
                            } ${
                              service.category === "Digital Marketing" &&
                              "text-red-500 bg-blue-100/60"
                            }   text-xs  rounded-full`}
                          >
                            {service.category}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-black  whitespace-nowrap">
                        {service?.description.substring(0, 26)}...
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => handleDelete(service?._id)}
                            className="text-black transition-colors duration-200   hover:text-red-500 focus:outline-none"
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>

                          <Link
                            to={`/update/${service._id}`}
                            className="text-black transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
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
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </Link>
                        </div>
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

export default ManageService;

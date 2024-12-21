const ServiceRequests = () => {
  return (
    <section className="container px-4 mx-auto py-12">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-black">Service To-Do</h2>
        <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          4 Requests
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
                    {["Title", "Email", "Deadline", "Price", "Category", "Status", "Actions"].map((header) => (
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
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-4 py-4 text-sm text-black dark:text-white whitespace-nowrap">
                      E-commerce Website Development
                    </td>
                    <td className="px-4 py-4 text-sm text-black dark:text-white whitespace-nowrap">
                      instructors@programming-hero.com
                    </td>
                    <td className="px-4 py-4 text-sm text-black dark:text-white whitespace-nowrap">
                      28/05/2024
                    </td>
                    <td className="px-4 py-4 text-sm text-black dark:text-white whitespace-nowrap">
                      $500
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 text-xs">
                        Web Development
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium">Complete</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-4">
                        <button
                          className="p-2 text-black dark:text-white rounded-md hover:text-green-500 focus:outline-none transition-colors"
                          title="Mark as Completed"
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
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </button>
                        <button
                          className="p-2 text-black dark:text-white rounded-md hover:text-red-500 focus:outline-none transition-colors"
                          title="Delete Request"
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
                              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
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

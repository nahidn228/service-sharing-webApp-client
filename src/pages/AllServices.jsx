import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";
import ServiceCard from "../components/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllServices = async () => {
      try {
        const { data } = await axios.get(
          `  ${
            import.meta.env.VITE_API_URL
          }/all-services?filter=${filter}&search=${search}`
        );
        setServices(data);
      } catch (err) {
        toast.error;
      } finally {
        setTimeout(() => setIsLoading(false), 2000);
      }
    };

    fetchAllServices();
  }, [filter, search]);

  const handleReset = () => {
    setFilter("");
    setSearch("");
  };

  console.log(services);

  return (
    <div className="container bg-white px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Services - Digital World Technology</title>
        
      </Helmet>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-11/12 mx-auto">
              <div>
                <select
                  onChange={(e) => setFilter(e.target.value)}
                  name="category"
                  id="category"
                  value={filter}
                  className="border p-4 rounded-lg w-full"
                >
                  <option value="">Filter By Category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphics Design">Graphics Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>

              <form className="w-full max-w-md">
                <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                  <input
                    className="px-6 py-2 text-black placeholder-gray-500 bg-white outline-none focus:placeholder-transparent w-full max-w-md"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    name="search"
                    value={search}
                    placeholder="Enter Job Title"
                    aria-label="Enter Job Title"
                  />
                </div>
              </form>

              <button
                onClick={handleReset}
                className="btn btn-outline btn-error"
              >
                Reset
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 ">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllServices;

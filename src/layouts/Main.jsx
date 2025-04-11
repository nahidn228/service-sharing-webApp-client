import { Outlet } from "react-router-dom";
import NewFooter from "../components/NewFooter";
import NewNavBar from "../components/NewNavbar";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar></Navbar> */}
      <NewNavBar></NewNavBar>
      {/* Outlet */}
      <div className="min-h-screen bg-white max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      {/* Footer */}
      <NewFooter></NewFooter>
    </div>
  );
};

export default Main;

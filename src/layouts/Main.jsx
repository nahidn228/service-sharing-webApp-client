import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NewNavBar from "../components/NewNavbar";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar></Navbar> */}
      <NewNavBar></NewNavBar>
      {/* Outlet */}
      <div className="min-h-screen bg-white ">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;

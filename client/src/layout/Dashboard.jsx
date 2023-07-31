import { Outlet } from "react-router-dom";

import SideNavbar from "../components/dashboard/SideNavbar";
import TopNavbar from "../components/dashboard/TopNavbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-100">
        <TopNavbar />
      </div>
      <div className="grid grid-col-1 lg:grid-cols-12 ">
        <SideNavbar />
        <div className="w-full  bg-gray-100 lg:col-span-10 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

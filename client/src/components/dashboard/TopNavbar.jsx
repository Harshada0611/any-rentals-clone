import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveSideNavbar from "./ResponsiveSidebar";
import { BiSolidUser } from "react-icons/bi";

const TopNavbar = ({ auth, setAuth }) => {
  const accountName = localStorage.getItem("accountName");

  // left sidebar mui drawer
  const [responsiveSidebar, setResponsiveSidebar] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setResponsiveSidebar({ ...responsiveSidebar, [anchor]: open });
  };
  return (
    <div className=" lg:hidden px-5 py-5 ">
      <section className="flex justify-between items-center">
        <div className="text-gray-600 flex  justify-between">
          <p className="mt-1">
            <BiSolidUser />
          </p>
          <p className="ml-2">{accountName}</p>
        </div>
        <div>
          <GiHamburgerMenu
            onClick={toggleDrawer("left", true)}
            className="text-red-700 text-2xl cursor-pointer "
          />
        </div>
      </section>

      <div>
        <ResponsiveSideNavbar
          responsiveSidebar={responsiveSidebar}
          setResponsiveSidebar={setResponsiveSidebar}
          toggleDrawer={toggleDrawer}
          auth={auth}
          setAuth={setAuth}
        />
      </div>
    </div>
  );
};

export default TopNavbar;

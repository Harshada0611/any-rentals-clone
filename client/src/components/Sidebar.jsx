import { Box, Drawer } from "@mui/material";
import { menuData } from "../data/menuData";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { services } from "../data/services";
import switchBtn from "../assets/poweroff.png";
import business from "../assets/briefcase.png";
import dashboard from "../assets/dashboard.png";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Sidebar = ({ leftSidebar, setLeftSidebar, toggleDrawer, auth }) => {
  const navigate = useNavigate();
  const sidebarRef = useRef();

  const [open, setOpen] = useState(false);
  // handle outside click for category dropdown
  const categorydropdownRef = useRef(null);
  const handleCategoryOutsideClick = (e) => {
    if (
      categorydropdownRef.current &&
      !categorydropdownRef.current.contains(e.target)
    ) {
      setOpen(false);
      setLeftSidebar({ left: false });
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleCategoryOutsideClick);
    return () => {
      window.removeEventListener("click", handleCategoryOutsideClick);
    };
  });

  return (
    <div className="w-1/4  " ref={sidebarRef}>
      <Drawer
        className="w-1/4"
        anchor={"left"}
        open={leftSidebar["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Box
          onKeyDown={toggleDrawer("left", false)}
          className="w-[18rem] h-full  bg-gray-50 text-black xl:hidden "
        >
          {/* categories */}
          <div className="border-b-[1px] ">
            <h1
              className="relative  h-full py-5 flex gap-4 px-4 bg-gray-800 text-white "
              onClick={() => setOpen(!open)}
            >
              <span>CATGEROY</span>
              {!open ? (
                <FaAngleDown className="text-xl mt-[.5px]" />
              ) : (
                <FaAngleUp className="text-xl mt-[.5px]" />
              )}
            </h1>
            {open ? (
              <div className="absolute overflow-auto bg-gray-900">
                {services.map((service, i) => (
                  <p
                    key={i}
                    value={service.title}
                    className="pl-1 text-sm py-1"
                    onClick={() => {
                      navigate(
                        `/category-details/${service.id}/${service.title}`
                      );
                      setOpen(!open);
                      setLeftSidebar({ left: false });
                    }}
                  >
                    <span className="text-white px-2">{service.title}</span>
                  </p>
                ))}
              </div>
            ) : null}
          </div>
          {/* categories ends */}
          {open ? null : (
            <div className="mx-2 mt-6 xl:hidden">
              {menuData.map((menu, i) => {
                return (
                  <p
                    className="flex text-md h-10 border-b-[1px]  mx-4 pt-3 py-10 cursor-pointer hover:text-orange-400"
                    key={i}
                    onClick={() => {
                      navigate(`${menu.pageLink}`);
                      setLeftSidebar({ left: false });
                    }}
                  >
                    <span className=" ">
                      <img
                        src={menu.icon}
                        alt=""
                        className="opacity-50 w-[1.3rem] h-[1.3rem]"
                      />
                    </span>
                    <span className="pl-5">{menu.title}</span>
                  </p>
                );
              })}
              <p
                className="flex text-md h-10 border-b-[1px] mx-4 pt-3 py-10 cursor-pointer hover:text-orange-400"
                onClick={() => {
                  localStorage.clear("token");
                  navigate(`${auth ? "/add-service" : "/account"}`);
                  setLeftSidebar({ left: false });
                }}
              >
                <span className=" ">
                  <img
                    src={business}
                    alt=""
                    className="opacity-50 w-[1.3rem] h-[1.3rem]"
                  />
                </span>
                <span className="pl-5">Add Business</span>
              </p>
              {auth ? (
                <p
                  className="flex text-md h-10 border-b-[1px] mx-4 pt-3 py-10 cursor-pointer hover:text-orange-400"
                  onClick={() => {
                    localStorage.clear("token");
                    navigate(`${auth ? "/add-service" : "/account"}`);
                    setLeftSidebar({ left: false });
                  }}
                >
                  <span className=" ">
                    <img
                      src={dashboard}
                      alt=""
                      className="opacity-50 w-[1.3rem] h-[1.3rem]"
                    />
                  </span>
                  <span className="pl-5">Dashboard</span>
                </p>
              ) : null}
              {auth ? (
                <p
                  className="flex text-md h-10 border-b-[1px] mx-4 pt-3 py-10 cursor-pointer hover:text-orange-400"
                  onClick={() => {
                    navigate("/");
                    setLeftSidebar({ left: false });
                    localStorage.clear("token");
                    localStorage.clear("accountType");
                    localStorage.clear("accountName");
                  }}
                >
                  <span className=" ">
                    <img
                      src={switchBtn}
                      alt=""
                      className="opacity-50 w-[1.3rem] h-[1.3rem]"
                    />
                  </span>
                  <span className="pl-5">Logout</span>
                </p>
              ) : (
                <p
                  className="flex text-md h-10 border-b-[1px] mx-4 pt-3 py-10 cursor-pointer hover:text-orange-400"
                  onClick={() => {
                    navigate("/account");
                    setLeftSidebar({ left: false });
                  }}
                >
                  <span className=" ">
                    <img
                      src={switchBtn}
                      alt=""
                      className="opacity-50 w-[1.3rem] h-[1.3rem]"
                    />
                  </span>
                  <span className="pl-5">Login</span>
                </p>
              )}
            </div>
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;

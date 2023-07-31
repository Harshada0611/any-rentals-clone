import { Box, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import home from "../../assets/home.png";
import profile from "../../assets/user.png";
import listing from "../../assets/to-do-list.png";
import blog from "../../assets/blog.png";
import switchbtn from "../../assets/poweroff.png";
import business from "../../assets/briefcase.png";
import query from "../../assets/faq.png";
import { useEffect } from "react";

const ResponsiveSideNavbar = ({
  responsiveSidebar,
  setResponsiveSidebar,
  toggleDrawer,
}) => {
  const navigate = useNavigate();
  // const accountType = localStorage.getItem("accountType");

  return (
    <div className="w-1/4  ">
      <Drawer
        className="w-1/4"
        anchor={"left"}
        open={responsiveSidebar["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Box
          onKeyDown={toggleDrawer("left", false)}
          className="w-[18rem] h-full py-2   xl:hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] "
        >
          <div className="flex justify-center items-center py-3 text-3xl border-b-[1px] border-b-gray-300 ">
            DubaiRentals
          </div>
          <div className="mx-2 mt-6 xl:hidden">
            <p
              className=" mx-4 py-5 text-sm hover:text-orange-500 cursor-pointer flex"
              onClick={() => navigate("/")}
            >
              <span>
                <img
                  src={home}
                  alt=""
                  className="opacity-40 w-[1.3rem] h-[1.3rem]"
                />
              </span>
              <span className="ml-3">Home</span>
            </p>
            <p
              className=" mx-4 py-5 text-sm  hover:text-orange-500 cursor-pointer flex"
              onClick={() => navigate("/profile")}
            >
              <span>
                <img
                  src={profile}
                  alt=""
                  className="opacity-40 w-[1.3rem] h-[1.3rem]"
                />
              </span>
              <span className="ml-3">My Profile</span>
            </p>
            <p
              className=" mx-4 py-5 text-sm  hover:text-orange-500 cursor-pointer flex"
              onClick={() => navigate("/blog")}
            >
              <span>
                <img
                  src={blog}
                  alt=""
                  className="opacity-40 w-[1.3rem] h-[1.3rem]"
                />
              </span>
              <span className="ml-3">Add Blog</span>
            </p>
            {/* {accountType !== "personal" ? ( */}
            <>
              <p
                className=" mx-4 py-5 text-sm  hover:text-orange-500 cursor-pointer flex"
                onClick={() => navigate("/add-service")}
              >
                <span>
                  <img
                    src={business}
                    alt=""
                    className="opacity-40 w-[1.3rem] h-[1.3rem]"
                  />
                </span>
                <span className="ml-3">Add Service</span>
              </p>
              <p
                className=" mx-4 py-5 text-sm  hover:text-orange-500 cursor-pointer flex"
                onClick={() => navigate("/listings")}
              >
                <span>
                  <img
                    src={listing}
                    alt=""
                    className="opacity-40 w-[1.3rem] h-[1.3rem]"
                  />
                </span>
                <span className="ml-3">Listings</span>
              </p>
              <p
                className=" mx-4 py-5 text-sm  hover:text-orange-500 cursor-pointer flex"
                onClick={() => navigate("/enquiries")}
              >
                <span>
                  <img
                    src={query}
                    alt=""
                    className="opacity-40 w-[1.3rem] h-[1.3rem]"
                  />
                </span>
                <span className="ml-3">My Queries</span>
              </p>
            </>
            {/* ) : null} */}
            <p
              className=" mx-4 py-5 text-sm  hover:text-orange-500 cursor-pointer flex"
              onClick={() => {
                navigate("/");
                localStorage.clear("token");
                localStorage.clear("accountType");
                localStorage.clear("accountName");
              }}
            >
              <span>
                <img
                  src={switchbtn}
                  alt=""
                  className="opacity-40 w-[1.3rem] h-[1.3rem]"
                />
              </span>
              <span className="ml-3">Logout</span>
            </p>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default ResponsiveSideNavbar;

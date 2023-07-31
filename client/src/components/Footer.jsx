import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import { menuData } from "../data/menuData";
import { BsArrowUp } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  md:grid grid-cols-5 sm:py-6 sm:px-4 bg-gray-900 text-white relative">
      {/* Categories */}
      <div className="md:col-span-2 ">
        <p className="pl-4 pt-4 text-xl">Categories</p>
        <div className="grid grid-cols-2 grid-rows-12 mt-4 ">
          <div className="pl-4 text-[.85rem] sm:text-[.9rem] grid grid-rows-15  ">
            {services.slice(0, 15).map((service, i) => {
              return (
                <p
                  key={i}
                  className="text-gray-400 cursor-pointer hover:text-white"
                  onClick={() =>
                    navigate(`/category-details/${service.id}/${service.title}`)
                  }
                >
                  {service.title}
                </p>
              );
            })}
          </div>
          <div className="text-[.85rem] sm:text-[.9rem] grid grid-rows-15 pl-6 sm:pl-4">
            {services.slice(15, 30).map((service, i) => {
              return (
                <p
                  key={i}
                  className="text-gray-400 cursor-pointer hover:text-white"
                  onClick={() =>
                    navigate(`/category-details/${service.id}/${service.title}`)
                  }
                >
                  {service.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {/* menu */}
      <div className="mt-4 sm:border-r-2 sm:border-gray-800 ">
        <p className="text-xl pl-4">menu</p>
        <div className="text-[.85rem] sm:text-[.9rem] flex flex-col pl-6 sm:py-4 ">
          {menuData.map((menu, i) => {
            return (
              <p
                key={i}
                className="text-gray-400 cursor-pointer hover:text-white"
                onClick={() => navigate(`${menu.pageLink}`)}
              >
                {menu.title}
              </p>
            );
          })}
        </div>
      </div>

      {/* email */}
      <div className="w-[95%] xl:col-span-2 mt-6 pb-6  ">
        <p className="text-xl pl-4">Stay Up To Date</p>
        <div className="flex md:flex-row  mt-4 pl-4">
          <input
            type=""
            placeholder="Enter Email"
            className="p-2 bg-gray-700 border-0 outline-0"
          />
          <button className="md:w-[7rem]  xl:mt-0 p-2 px-6 bg-red-700 cursor-pointer ">
            Submit
          </button>
        </div>

        <a href="#">
          <Tooltip title="Back to top">
            <div className="absolute  top-[75%] right-10  md:top-20 md:right-10 ">
              <BsArrowUp className="text-6xl text-gray-600 animate-bounce" />
            </div>
          </Tooltip>
        </a>
      </div>
    </div>
  );
};

export default Footer;

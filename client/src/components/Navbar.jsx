import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Sidebar from "./Sidebar";
import NavCategoriesWrap from "./NavCategoriesWrap";
import { useNavigate } from "react-router-dom";

const Navbar = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    setAuth(token);
    //eslint-disable-next-line
  }, [token]);

  // navbar changing color on scroll
  const [navScroll, setNavScroll] = useState(false);
  useEffect(() => {
    const ChangeNavColor = () => {
      if (window.scrollY > 80) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    window.addEventListener("scroll", ChangeNavColor);
    return () => {
      window.removeEventListener("scroll", ChangeNavColor);
    };
  }, []);

  // open category section
  const [openCategories, setOpenCategories] = useState(false);

  // left sidebar mui drawer
  const [leftSidebar, setLeftSidebar] = useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeftSidebar({ ...leftSidebar, [anchor]: open });
  };

  // handle outside click for category dropdown
  const dropdownRef = useRef(null);
  const handleCategoryOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenCategories(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleCategoryOutsideClick);
    return () => {
      window.removeEventListener("click", handleCategoryOutsideClick);
    };
  });

  // open additional menu
  const [openAdditionalMenu, setOpenAdditionalMenu] = useState(false);
  // handle outside click for additional menu
  const additionalMenuRef = useRef(null);
  const handleAdditionalMenuOutsideClick = (e) => {
    if (
      additionalMenuRef.current &&
      !additionalMenuRef.current.contains(e.target)
    ) {
      setOpenAdditionalMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleAdditionalMenuOutsideClick);
    return () => {
      window.removeEventListener("click", handleAdditionalMenuOutsideClick);
    };
  });

  return (
    <div
      className={`w-full h-[5rem] fixed top-0 left-0 z-20  grid grid-cols-5 sm:grid-cols-12 pt-4 sm:py-0
    ${
      navScroll
        ? "bg-orange-50 text-black border-b-2 border-red-700"
        : "bg-transparent text-white "
    }
      transition-all duration-300 ease-in-out `}
    >
      <div className="col-span-4 sm:col-span-5 flex items-center text-2xl  sm:text-3xl pl-10 sm:pl-20 xl:pl-[10rem]  cursor-pointer">
        AnyRentals
      </div>
      <div className="col-span-1 sm:col-span-6  ">
        <div className="h-full flex justify-start md:justify-end items-center xl:hidden pt-1">
          <GiHamburgerMenu
            className="text-red-700"
            onClick={toggleDrawer("left", true)}
          />
        </div>

        <div className="hidden h-full px-4 xl:flex justify-between items-center cursor-pointer">
          <p className="hover:text-orange-400" onClick={() => navigate("/")}>
            Home
          </p>
          <p
            className="hover:text-orange-400"
            onClick={() => navigate("/about")}
          >
            About
          </p>
          <p
            ref={dropdownRef}
            className="flex cursor-pointer hover:text-orange-400 relative"
            onClick={() => setOpenCategories(!openCategories)}
          >
            Catgegory
            {!openCategories ? (
              <IoIosArrowDown className="mt-1 ml-1" />
            ) : (
              <IoIosArrowUp className="mt-1 ml-1" />
            )}
            {openCategories ? <NavCategoriesWrap /> : null}
          </p>
          <p
            className="hover:text-orange-400"
            onClick={() => navigate("/read-blog")}
          >
            Read Blogs
          </p>
          <p
            className="hover:text-orange-400"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </p>
          <p
            className="hover:text-orange-400"
            onClick={() => navigate(`${auth ? "/listings" : "/account"} `)}
          >
            Add Your Business
          </p>

          <p className="relative" ref={additionalMenuRef}>
            <GiHamburgerMenu
              onClick={() => setOpenAdditionalMenu(!openAdditionalMenu)}
              className="text-red-700 cursor-pointer "
            />
            {openAdditionalMenu ? (
              <div className="w-[15rem] bg-black text-white absolute top-10 right-0 py-5 pb-9 shadow-md shadow-black-50 flex flex-col ">
                {auth ? (
                  <p
                    className="text-md h-10 border-b-[1px] border-gray-600 mx-4 pt-2 cursor-pointer hover:text-orange-400"
                    onClick={() => {
                      navigate("/listings");
                      setOpenAdditionalMenu(false);
                    }}
                  >
                    Dashboard
                  </p>
                ) : null}

                {auth ? (
                  <p
                    className="text-md h-10 border-b-[1px] border-gray-600 mx-4 pt-2 cursor-pointer hover:text-orange-400"
                    onClick={() => {
                      navigate("/");
                      setOpenAdditionalMenu(false);
                      localStorage.clear("token");
                      localStorage.clear("accountType");
                      localStorage.clear("accountName");
                    }}
                  >
                    Logout
                  </p>
                ) : (
                  <p
                    className="text-md h-10 border-b-[1px] border-gray-600 mx-4 pt-2 cursor-pointer hover:text-orange-400"
                    onClick={() => {
                      navigate("/account");
                      setOpenAdditionalMenu(false);
                    }}
                  >
                    Login
                  </p>
                )}
              </div>
            ) : null}
          </p>

          <p className="xl:hidden">
            <GiHamburgerMenu
              onClick={toggleDrawer("left", true)}
              className="text-red-700 cursor-pointer "
            />
          </p>
        </div>
      </div>

      <Sidebar
        leftSidebar={leftSidebar}
        setLeftSidebar={setLeftSidebar}
        toggleDrawer={toggleDrawer}
        auth={auth}
      />
    </div>
  );
};

export default Navbar;

import { useNavigate } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import home from "../../assets/home.png";
import profile from "../../assets/user.png";
import listing from "../../assets/to-do-list.png";
import blog from "../../assets/blog.png";
import switchbtn from "../../assets/poweroff.png";
import business from "../../assets/briefcase.png";
import query from "../../assets/faq.png";

const SideNavbar = () => {
  const navigate = useNavigate();
  const accountType = localStorage.getItem("accountType");
  const accountName = localStorage.getItem("accountName");

  return (
    <div className=" col-span-2 border-2 hidden lg:block pb-10">
      <div className="flex flex-col justify-center py-4 border-b-2">
        <h1 className="text-3xl text-center">AnyRentals</h1>
        <div className="text-gray-600 flex  justify-center items-center mt-4 ">
          <p className="">
            <BiSolidUser />
          </p>
          <p className="ml-2 pr-3">{accountName}</p>
        </div>
      </div>

      <div className="mt-4">
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
        {accountType !== "personal" ? (
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
        ) : null}
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
    </div>
  );
};

export default SideNavbar;

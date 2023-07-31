import { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import axios from "../../../axios";
import Loader from "../../../loader/Loader";

const MyProfile = () => {
  const [accounDetails, setAccountDetails] = useState([]);

  const token = localStorage.getItem("token");
  const getData = async () => {
    try {
      const resp = await axios.get("/account-details", {
        headers: {
          authorization: token,
        },
      });
      console.log(resp);
      if (resp.data.success) {
        setAccountDetails(resp.data.details);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!accounDetails) {
    return <Loader />;
  }

  return (
    <div className=" pb-10 lg:pt-[2rem] ">
      <div role="presentation" className="w-[90%] lg:w-[90%] m-auto mt-6 ">
        <Breadcrumbs aria-label="breadcrumb">
          <p color="inherit" href="/">
            Dashboard
          </p>
          <Typography color="text.primary">My Profile</Typography>
        </Breadcrumbs>
      </div>

      <div className=" grid grid-cols-1  gap-6 lg:px-[5rem]">
        {/* section 1 */}
        <div className="w-[100%] lg:w-[100%] lg:shadow-2xl mt-7">
          <div className="relative w-[80%] lg:w-[100%] m-auto px-5 py-9 bg-white  ">
            <div className=" w-[50%] md:w-[30%] lg:w-[] h-[10rem] md:h-[12rem]  m-auto flex justify-center">
              <BiSolidUserCircle className="text-9xl" />
            </div>
            <div className="flex flex-col gap-6 mt-4  ">
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-600">Username</p>
                <p className="border-b-[1px] capitalize">
                  {accounDetails.name}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-600">Email</p>
                <p className="border-b-[1px]">{accounDetails.email}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-600">Contact</p>
                <p className="border-b-[1px] ">{accounDetails.contact}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-600 ">User Type</p>
                <p className="border-b-[1px] capitalize">
                  {accounDetails.accountType}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className=" w-[10rem] text-black bg-yellow-500 hover:bg-yellow-500  font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

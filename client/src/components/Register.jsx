import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../axios";

const AddBusinessRegistrationForm = ({ setLogin }) => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  //handle inputs
  const handleInput = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //handle sumbit
  const handleSubmit = async () => {
    console.log(inputData);
    if (inputData.password === inputData.confirmPassword) {
      try {
        const response = await axios.post("/account-register", inputData);
        console.log(response);
        if (response.data.success) {
          setLogin(true);
          toast.success(response.data.message);
        } else {
          // toast.error(response.data.message)

          // console.log('errors', response.data.message)
          const errors = response.data.message;
          errors.forEach((err) => {
            toast.error(err.msg);
          });
        }
      } catch (error) {
        console.log(error.response.data.message);

        // console.log(error.response.data.message);
      }
    } else {
      toast.error("passwords dosen't match");
    }
  };

  return (
    <div className="h-[55rem] relative  mt-18 ">
      <div className=" bg-[rgba(255,255,255)] w-[90%] md:w-[60%] lg:w-[55%] lg:h-[65%] px-8  absolute left-[5%] md:left-[23%] top-[8%] ">
        <div className="p-4  text-center text-stone-600 border-b-2">
          <h1 className="text-2xl">SIGN UP</h1>
          <p className="mt-1">
            Already have an account?
            <span
              className="ml-4 text-blue-700 cursor-pointer"
              onClick={() => setLogin(true)}
            >
              Login
            </span>
          </p>
        </div>
        <form className=" grid grid-cols-1 md:grid md:grid-cols-2 md:space-x-10 pb-8 lg:pt-12 mt-8 md:mt-4 lg:mt-0 ">
          <div className="flex-1 md:space-y-10 ">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputData.name}
                onChange={handleInput}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border border-gray-400-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="telephone" className="block font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                id="telephone"
                name="contact"
                value={inputData.contact}
                onChange={handleInput}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border border-gray-400-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputData.email}
                onChange={handleInput}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border border-gray-400-blue-500"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8 md:space-y-10">
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={inputData.password}
                onChange={handleInput}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border border-gray-400-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={inputData.confirmPassword}
                onChange={handleInput}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border border-gray-400-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="userType" className="block font-medium">
                Account Type
              </label>
              <select
                id="accountType"
                name="accountType"
                value={inputData.accountType}
                onChange={handleInput}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border border-gray-400-blue-500"
              >
                <option value="personal">Personal</option>
                <option value="business-onwer">Business Owner</option>
              </select>
            </div>
          </div>
        </form>

        <div className="flex justify-center items-center mt-6 mb-6">
          <button
            className="bg-blue-900 w-[70%] h-[3rem] rounded-md text-white hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBusinessRegistrationForm;

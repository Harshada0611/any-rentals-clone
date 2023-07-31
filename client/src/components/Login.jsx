import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const Login = ({ setLogin }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  //handle inputs
  const handleInput = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputData);
    try {
      const response = await axios.post("/account-signin", inputData);
      if (response.data.success) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("accountType", response.data.account.accountType);
        localStorage.setItem("accountName", response.data.account.name);

        navigate("/listings");
        toast.success("LoggedIn successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      // toast.error(err.message);
      console.log(err);
    }
  };
  return (
    <div>
      <section className="bg-[linear-gradient(to right, bg-gray-600, black, bg-gray-500)] dark:bg-gray-900 mt-[6rem] sm:mt-0">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>

              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputData.email}
                    onChange={handleInput}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={inputData.password}
                    onChange={handleInput}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="button"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={handleSubmit}
                >
                  Signin
                </button>
                <div>
                  <p className="text-gray-400 hover:text-blue-900 cursor-pointer">
                    Forgot Password
                  </p>
                </div>

                <div className="flex">
                  <p className="mt-1 text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?
                  </p>
                  <p
                    className="text-blue-900 ml-2  font-semibold text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                    onClick={() => {
                      setLogin(false);
                    }}
                  >
                    Sign up
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "./axios";

import Main from "./layout/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import ReadBlogs from "./pages/ReadBlogs";
import CategoryServiceList from "./pages/CategorySevicesList";
import ViewServiceDetails from "./pages/ViewServiceDetails";

// dashboard
import Dashboard from "./layout/Dashboard";
import Listings from "./components/dashboard/pages/Listings";
import MyProfile from "./components/dashboard/pages/MyProfile";
import Blog from "./components/dashboard/pages/Blog";
import AddService from "./components/dashboard/pages/AddService";
import Enquiries from "./components/dashboard/pages/Enquries";

function App() {
  const token = localStorage.getItem("token");
  const getData = async () => {
    try {
      const resp = await axios.get("/account-details", {
        headers: {
          authorization: token,
        },
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route element={<Main />}>
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/read-blog" element={<ReadBlogs />}></Route>

          <Route
            path="/category-details/:categoryId/:categoryName"
            element={<CategoryServiceList />}
          ></Route>
          <Route
            path="/view-service-details/:serviceId"
            element={<ViewServiceDetails />}
          ></Route>
        </Route>

        <Route element={<Dashboard />}>
          <Route path="/profile" element={<MyProfile />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/add-service" element={<AddService />}></Route>
          <Route path="/listings" element={<Listings />}></Route>

          <Route path="/enquiries" element={<Enquiries />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [auth, setAuth] = useState("");

  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

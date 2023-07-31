import { useState, useEffect } from "react";
import axios from "../../../axios";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Loader from "../../../loader/Loader";
import ServiceList from "../components/ServiceList";

const Listings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const token = localStorage.getItem("token");
  const [serviceList, setServiceList] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get("/my-services", {
        headers: {
          authorization: token,
        },
      });
      console.log(resp.data.list);
      setServiceList(resp.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!serviceList) {
    return <Loader />;
  }
  return (
    <div className="h-[45rem]">
      <div role="presentation" className="w-[90%] lg:w-[90%] m-auto mt-6 ">
        <Breadcrumbs aria-label="breadcrumb">
          <p color="inherit" href="/">
            Dashboard
          </p>
          <Typography color="text.primary">Listings</Typography>
        </Breadcrumbs>
      </div>

      <div className="flex justify-center items-center h-[90%]">
        <ServiceList serviceList={serviceList} />
      </div>
    </div>
  );
};

export default Listings;

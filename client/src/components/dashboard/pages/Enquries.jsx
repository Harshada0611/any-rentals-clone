import { useState, useEffect } from "react";
import axios from "../../../axios";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Loader from "../../../loader/Loader";
import EnquiryTable from "../components/EnquiryTable";

const Enquiries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const token = localStorage.getItem("token");
  const [list, setList] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get("/get-enquiries", {
        headers: {
          authorization: token,
        },
      });
      console.log(resp);
      setList(resp.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!list) {
    return <Loader />;
  }
  return (
    <div className="mb-10 min-h-[20rem] max-h-auto">
      <div role="presentation" className="w-[90%] lg:w-[90%] m-auto mt-6 ">
        <Breadcrumbs aria-label="breadcrumb">
          <p color="inherit" href="/">
            Dashboard
          </p>
          <Typography color="text.primary">Enquiries</Typography>
        </Breadcrumbs>
      </div>

      <div className="flex justify-center items-center h-[90%]">
        <EnquiryTable list={list} />
      </div>
    </div>
  );
};

export default Enquiries;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
// import { services } from "../data/services";
import axios from "../axios";
import Loader from "../loader/Loader";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

const CategoryServiceList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { categoryId, categoryName } = useParams();
  const [categoryObj, setCategoryObj] = useState(null);

  const findCategory = () => {
    console.log(categoryId, categoryName);
    const dataObj = services.find(
      (service) => service.id === parseInt(categoryId)
    );
    setCategoryObj(dataObj);
  };
  useEffect(() => {
    findCategory();
  });
  console.log(categoryObj);

  const [list, setList] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get("/all-services");
      console.log(resp);

      setList(resp.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!categoryObj || !list) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 pb-[5rem]">
      <div className="w-full h-[5rem] bg-gray-800"></div>

      <div role="presentation" className=" w-[95%] lg:w-[90%] m-auto mt-10 ">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Category
          </Link>
          <Typography color="text.primary">{categoryName}</Typography>
        </Breadcrumbs>
      </div>
      <div className="w-[95%] lg:w-[90%] m-auto  mt-6 bg-white p-5 ">
        <div className="flex border-gray-100 border-b-[2px] pb-2">
          <section className="flex justify-center items-center">
            <img src={categoryObj.icon} alt="" />
          </section>
          <section className="h-full ml-4 text-2xl mt-2">
            {categoryObj.title}
          </section>
        </div>
        <div className="mt-6">
          <p className="text-justify">{categoryObj.content}</p>
        </div>
      </div>

      {/* <div className="w-[90%] m-auto grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {list
          .filter((service) => {
            if (service.serviceType === categoryName) {
              return service;
            }
          })
          .map((service, i) => {
            return <ServiceCard key={i + 1} service={service} />;
          })}
      </div> */}
    </div>
  );
};

export default CategoryServiceList;

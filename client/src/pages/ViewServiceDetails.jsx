import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import ServiceDetails from "../components/SeviceDetails";
import ServiceContactForm from "../components/ServiceContactForm";
import Loader from "../loader/Loader";
import { FaMapMarkerAlt } from "react-icons/fa";

const ViewServiceDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { serviceId } = useParams();
  const [serviceData, setServiceData] = useState(null);

  const getData = async () => {
    try {
      const resp = await axios.get(`/view-service-details/${serviceId}`);
      console.log(resp);
      setServiceData(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!serviceData) {
    return <Loader />;
  }

  return (
    <div className="w-[100%] bg-gray-100 ">
      <div className="w-full h-[5rem] bg-gray-800"></div>
      {/* banner */}
      <div
        className="relative h-[25rem] md:h-[33rem] m-auto bg-cover bg-center"
        style={{
          background: `url(${serviceData.images[0]})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="px-5 mt-10 md:w-[80%] m-auto absolute bottom-10">
          <p className="text-3xl md:text-5xl font-bold">
            {serviceData.businessName}
          </p>
          <p className="mt-3 flex gap-2">
            <FaMapMarkerAlt className="opacity-90 mt-1 " />
            <a href="#location" className="text-lg">
              {serviceData.landmark} {serviceData.city} {serviceData.country}
            </a>
          </p>
        </div>
      </div>

      {/* two sections left=>detail section and right=>contact form */}
      <div className="grid grid-cols-1 md:grid-cols-8 ">
        <section className="md:col-span-6 p-2">
          {/*nav to naviate on same page */}
          <div className="w-full overflow-auto flex pb-3 bg-orange-50 rounded-lg pt-3 px-1 mt-1">
            <p className="w-auto h-[3rem] px-3 flex justify-center items-center  cursor-pointer hover:bg-orange-500 rounded-sm text-md">
              <a href="#description">Description</a>
            </p>
            <p className="w-auto h-[3rem] px-3 flex justify-center items-center  cursor-pointer hover:bg-orange-500 rounded-sm text-md">
              <a href="#services">Services</a>
            </p>
            <p className="h-[3rem] px-3 flex justify-center items-center  cursor-pointer hover:bg-orange-500 rounded-sm text-md">
              <a href="#features">Features</a>
            </p>
            <p className="h-[3rem] px-3 flex justify-center items-center  cursor-pointer hover:bg-orange-500  rounded-sm text-md">
              <a href="#gallary">Gallary</a>
            </p>
            <p className="h-[3rem] px-3 flex justify-center items-center  cursor-pointer hover:bg-orange-500 rounded-sm text-md">
              <a href="#location">Location</a>
            </p>
            <p className="h-[3rem] px-3 flex justify-center items-center  cursor-pointer hover:bg-orange-500 rounded-sm text-md md:hidden">
              <a href="#contact">Contact</a>
            </p>
          </div>

          {/* navigate sections */}
          <ServiceDetails serviceData={serviceData} />
        </section>

        {/* contact form */}
        <ServiceContactForm serviceData={serviceData} />
      </div>
    </div>
  );
};

export default ViewServiceDetails;

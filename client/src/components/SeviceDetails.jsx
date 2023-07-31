import ImageGallary from "./ImageGallary";
import { FaAngleDoubleRight } from "react-icons/fa";

const SeviceDetails = ({ serviceData }) => {
  return (
    <div className="md:mb-[7rem]">
      {/* description */}
      <div className="p-5 border-2 mt-5 bg-white">
        <h1 className="text-xl text-gray-500">Description</h1>
        <p className="mt-3">{serviceData.description || "---"}</p>
      </div>

      {/* services */}
      <div className="p-5 border-2 mt-5 bg-white" id="services">
        <h1 className="text-xl text-gray-500">Services</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {serviceData.subServices.map((service, i) => {
            return (
              <p key={i + 1} className="flex gap-2">
                <FaAngleDoubleRight className=" text-sm text-gray-500" />
                <span className="text-[0.8rem] uppercase ">{service}</span>
              </p>
            );
          })}
        </div>
      </div>

      {/* services */}
      <div className="p-5 border-2 mt-5 bg-white" id="features">
        <h1 className="text-xl text-gray-500">Features</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {serviceData.keyFeatures.map((feature, i) => {
            return (
              <p key={i + 1} className="flex gap-2">
                <FaAngleDoubleRight className=" text-sm text-gray-500" />
                <span className="text-[0.8rem] uppercase ">{feature}</span>
              </p>
            );
          })}
        </div>
      </div>
      <ImageGallary serviceData={serviceData} />

      {/* map location */}
      <section className="w-full h-[18rem] bg-white mt-2" id="location">
        <iframe
          id="mapIframe"
          src={`https://maps.google.com/maps?q=${serviceData.landmark},${serviceData.city},${serviceData.state}, ${serviceData.country}&hl=es;&output=embed`}
          title="locationOnMap"
          className="w-full h-full"
        ></iframe>
      </section>
    </div>
  );
};

export default SeviceDetails;

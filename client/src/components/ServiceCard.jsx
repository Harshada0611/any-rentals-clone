import { MdLocationOn, MdArrowForward } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const viewDetails = (service) => {
    const serviceId = service._id;
    navigate(`/view-service-details/${serviceId}`);
  };

  return (
    <div className="h-[30rem] w-[20rem] flex flex-col justify-between mt-8 rounded shadow-lg mx-auto relative bg-white">
      <div className="w-full h-[10rem] lg:h-[12rem] ">
        <img
          src={service.images[0]}
          alt="Card"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="px-4 mt-4 ">
        <div className="font-bold text-md mb-2">{service.businessName}</div>
        <div className="flex justify-start">
          <MdLocationOn className="text-gray-600 mr-2 mt-1" />
          <span className="text-gray-600 ">{service.city}</span>
        </div>
        <p className="text-gray-700 h-[7rem] text-xs overflow-hidden mt-4  ">
          {service.description}
        </p>
      </div>
      <div className=" px-4  mt-5  flex justify-start text-sm">
        <BsCalendar2Check className="text-gray-600  mr-2" />
        <span className="text-gray-600  ">{service.postedOn}</span>
      </div>
      <div className="h-[3rem] flex  justify-between items-center border-2 mt-3 text-gray-600 py-3  ">
        <FaMobileAlt className="w-[50%] text-2xl text-center  hover:text-orange-400 cursor-pointer" />
        <MdArrowForward
          className="w-[50%] text-3xl text-center hover:text-orange-400 cursor-pointer"
          onClick={() => viewDetails(service)}
        />
      </div>
    </div>
  );
};

export default ServiceCard;

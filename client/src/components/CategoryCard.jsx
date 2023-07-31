import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="border-[1px] border-gray-200 relative" data-aos="fade-up">
      <div className="h-[15rem] ">
        <img src={service.img} alt="loading.." className="w-full h-full " />
        <div className="absolute  bottom-[20%] right-3">
          <p
            className="flex  cursor-pointer font-semibold text-yellow-400  hover:text-white"
            onClick={() =>
              navigate(`/category-details/${service.id}/${service.title}`)
            }
          >
            View More
            <IoIosArrowForward className="mt-1" />
          </p>
        </div>
      </div>
      <div className="p-2 h-[3rem] text-gray-500">{service.title}</div>
    </div>
  );
};

export default CategoryCard;

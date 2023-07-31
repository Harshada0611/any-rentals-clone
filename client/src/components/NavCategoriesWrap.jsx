import { services } from "../data/services";
import { useNavigate } from "react-router-dom";

const NavCategoriesWrap = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[40rem]  absolute top-10 bg-gray-100 text-gray-500 shadow-md shadow-slate-50">
      <div className="w-full h-1 bg-red-600"></div>
      <div className="grid grid-cols-2 px-4 py-5">
        <div>
          {services.slice(0, 15).map((service, i) => {
            return (
              <p
                key={i + 1}
                className="hover:text-orange-400"
                onClick={() =>
                  navigate(`/category-details/${service.id}/${service.title}`)
                }
              >
                {service.title}
              </p>
            );
          })}
        </div>
        <div>
          {services.slice(15, 30).map((service, i) => {
            return (
              <p
                key={i + 1}
                className="hover:text-orange-400"
                onClick={() =>
                  navigate(`/category-details/${service.id}/${service.title}`)
                }
              >
                {service.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavCategoriesWrap;

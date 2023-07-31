import { BiSolidRightArrow } from "react-icons/bi";

const ServiceList = ({ serviceList }) => {
  return (
    <div className="w-[100%] md:w-[90%] m-auto mt-6 ">
      <div className=" w-[100%] h-[30%] z-20  rounded-md  p-2 flex justify-between items-end "></div>

      <div className="w-[100%] m-auto relative overflow-x-auto ">
        {serviceList.length === 0 ? (
          <p className=" h-full px-2 py-3">No Listings Found !</p>
        ) : (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase  bg-orange-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-[3rem] h-[2rem] text-center">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Business Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Service & Sub Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceList.map((service, i) => {
                return (
                  <tr
                    className="text-sm  bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={i + 1}
                  >
                    <th
                      scope="row"
                      className="md:w-[7rem] text-center border-r-[1px] py-4 font-medium whitespace-nowrap dark:text-white  text-orange-700"
                    >
                      {service.uniqueId || "---"}
                    </th>
                    <td className="px-1 py-4 pr-0 border-r-[1px]">
                      {service.businessName || "---"}
                    </td>
                    <td className="px-1 py-4 border-r-[1px] overflow-hidden">
                      <span className="font-bold">{service.serviceType}</span>
                      <br></br>
                      {service.subCategory || "---"}
                    </td>
                    <td className="px-1 py-4 pl-4">Action</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ServiceList;

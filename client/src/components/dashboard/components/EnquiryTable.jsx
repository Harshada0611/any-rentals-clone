import { BiSolidRightArrow } from "react-icons/bi";

const EnquiryTable = ({ list }) => {
  return (
    <div className="w-[100%] md:w-[90%] m-auto mt-6 ">
      <div className=" w-[100%] h-[30%] z-20  rounded-md  p-2 flex justify-between items-end "></div>

      <div className="w-[100%] m-auto relative overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-orange-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-[3rem] h-[2rem] text-center">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email & Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((enquiry, i) => {
              return (
                <tr
                  className="text-sm  bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i + 1}
                >
                  <th
                    scope="row"
                    className="md:w-[7rem] text-center border-r-[1px] border-gray-300 py-4 font-medium whitespace-nowrap dark:text-white  text-orange-700"
                  >
                    {enquiry.uniqueId || "---"}
                  </th>
                  <td className="px-1 py-4 pr-0 border-r-[1px] border-gray-300">
                    {enquiry.name || "---"}
                  </td>
                  <td className="px-1 py-4 border-r-[1px] border-gray-300 flex flex-col ">
                    <p>{enquiry.email || "---"}</p>
                    <p>{enquiry.contact || "---"}</p>
                  </td>

                  <td className="px-1 py-4 pl-4">
                    <div className="font-bold">{enquiry.businessName}</div>
                    <div className="font-bold">{enquiry.serviceCategory}</div>
                    <div className="w-full border-[1px]"></div>
                    <p>{enquiry.message}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnquiryTable;

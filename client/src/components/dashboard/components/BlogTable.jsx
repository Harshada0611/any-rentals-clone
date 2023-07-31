import { BiSolidRightArrow } from "react-icons/bi";

const BlogTable = ({ blogList }) => {
  return (
    <div className="w-[100%] m-auto relative overflow-x-auto ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="w-[3rem] h-[2rem]"></th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {blogList.map((blog, i) => {
            return (
              <tr
                className="text-sm bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={i + 1}
              >
                <th
                  scope="row"
                  className="px-2 py-4 font-medium whitespace-nowrap dark:text-white opacity-50 text-orange-700"
                >
                  <BiSolidRightArrow />
                </th>
                <td className="px-1 py-4 pr-0 border-r-[1px]">
                  {blog.serviceCategory || "---"}
                </td>
                <td className="px-1 py-4 border-r-[1px] overflow-hidden">
                  {blog.title || "---"}
                </td>
                <td className="px-1 py-4 pl-4">Silver</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;

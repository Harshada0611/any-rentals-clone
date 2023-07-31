import { useState, useEffect } from "react";
import axios from "../../../axios";
import BlogTable from "./BlogTable";
import Loader from "../../../loader/Loader";

const BlogList = ({ setBlogForm }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const token = localStorage.getItem("token");
  const [blogList, setBlogList] = useState([]);
  const getData = async () => {
    try {
      const resp = await axios.get("/my-blogs", {
        headers: {
          authorization: token,
        },
      });
      console.log(resp);
      setBlogList(resp.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!blogList) {
    return <Loader />;
  }

  return (
    <div className="w-[90%]  m-auto mt-6 ">
      <div className=" w-[100%] h-[30%] z-20 bg-orange-500  rounded-md  p-2 flex justify-between items-end ">
        <div className=" h-full">My Blogs</div>
        <div>
          <button
            className="bg-white shadow-md h-[3rem] p-2 text-xs cursor-pointer"
            onClick={() => setBlogForm(true)}
          >
            Write Blog
          </button>
        </div>
      </div>

      <BlogTable blogList={blogList} />
    </div>
  );
};

export default BlogList;

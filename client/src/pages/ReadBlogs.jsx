import { useState, useEffect } from "react";
import {} from "react";
import axios from "../axios";
import BlogCard from "../components/BlogCard";

const ReadBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const getblog = async () => {
    try {
      const resp = await axios.get("/all-blogs");
      console.log(resp);
      setAllBlogs(resp.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getblog();
  }, []);

  return (
    <div className="">
      <div className="w-full h-[5rem] bg-gray-800"></div>
      {/* <div className="md:w-[80%] py-7 m-auto">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 gap-4 md:gap-16 ">
          {allBlogs.map((blog, i) => {
            return <BlogCard key={i + 1} blog={blog} />;
          })}
        </div>
      </div> */}
    </div>
  );
};

export default ReadBlogs;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import BlogCard from "../components/BlogCard";

const ReadBlogs = () => {
  const navigate = useNavigate();

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
      {/* banner */}
      <div className="md:w-[90%] h-[38rem] py-7 m-auto hidden md:grid grid-cols-5 ">
        <div className="col-span-3">
          {allBlogs.slice(0, 1).map((blog, i) => {
            return (
              <div
                className=" relative border-2 h-full cursor-pointer"
                onClick={() => navigate(`/blog-page/${blog._id}`)}
                key={i + 1}
                style={{
                  background: `url(${blog.blogImage})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p className="absolute bottom-7 p-3 font-bold text-orange-500">
                  {blog.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" col-span-2">
          <section className="grid grid-cols-1 grid-rows-2  w-full h-full">
            {allBlogs.slice(4, 6).map((blog, i) => {
              return (
                <div
                  className="border-2 h-full w-full relative"
                  onClick={() => navigate(`/blog-page/${blog._id}`)}
                  key={i + 1}
                  style={{
                    background: `url(${blog.blogImage})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="absolute bottom-0 p-3 font-bold text-orange-500">
                    {blog.title}
                  </p>
                </div>
              );
            })}
          </section>
        </div>
      </div>
      {/* banner ends */}

      <h1 className="md:w-[85%]  text-xl md:text-2xl text-gray-500 m-auto px-4 mt-3">
        Blogs
      </h1>
      <div className="md:w-[85%] py-7 m-auto">
        <div className="container mx-auto px-4 py-2 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 md:gap-16 ">
          {allBlogs.map((blog, i) => {
            return <BlogCard key={i + 1} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ReadBlogs;

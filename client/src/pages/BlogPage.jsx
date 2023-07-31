import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import Loader from "../loader/Loader";

const BlogPage = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState(null);

  const getData = async () => {
    try {
      const resp = await axios.get(`/find-blog/${blogId}`);
      console.log(resp);
      setBlogData(resp.data.blog);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!blogData) {
    <Loader />;
  }

  return (
    <div>
      <div className="w-full h-[5rem] bg-gray-800"></div>
      <div className="py-5  mb-9  md:w-[90%] m-auto">
        <div className="h-[20rem] md:h-[30rem] w-full">
          <img src={blogData.blogImage} alt="" className="h-full w-full" />
        </div>
        <div className=" mt-2 md:mt-5 px-2 text-lg md:text-2xl text-gray-500">
          {blogData.title}
        </div>
        <div className="mt-7 px-2">{blogData.description}</div>
      </div>
    </div>
  );
};

export default BlogPage;

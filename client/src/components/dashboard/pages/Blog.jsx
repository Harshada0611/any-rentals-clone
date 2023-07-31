import { useState } from "react";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BogList";

const Blog = () => {
  const [blogForm, setBlogForm] = useState(false);

  return (
    <div className=" mb-7">
      {blogForm ? (
        <BlogForm setBlogForm={setBlogForm} />
      ) : (
        <BlogList setBlogForm={setBlogForm} />
      )}
    </div>
  );
};

export default Blog;

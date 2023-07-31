import { useEffect, useState } from "react";
import { services } from "../../../data/services";
import axios from "../../../axios";
import { toast } from "react-hot-toast";

const BlogForm = ({ setBlogForm }) => {
  const token = localStorage.getItem("token");
  const [form, setForm] = useState({
    title: "",
    serviceCategory: "",
    blogImage: "",
    description: "",
  });
  const [image, setImage] = useState("");
  //handle inputs
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  //post data form
  const postData = async () => {
    console.log(form);
    await axios
      .post("/add-blog", form, {
        headers: {
          authorization: token,
        },
      })
      .then((resp) => {
        console.log(resp);
        setBlogForm(false);
        toast.success("Your blog posted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //upload image function
  const uploadImage = async () => {
    const imgData = new FormData();
    imgData.append("file", image);
    imgData.append("upload_preset", "insta_clone");
    await axios
      .post(
        "https://api.cloudinary.com/v1_1/harshada0611/image/upload",
        imgData
      )
      //imgData is instace that we create in line no 31
      .then((resp) => {
        console.log(resp.data.url);
        setForm({ ...form, blogImage: resp.data.url });
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
  };

  useEffect(() => {
    if (form.blogImage) {
      postData();
    }
  }, [form.blogImage]);

  return (
    <div className="w-[95%] m-auto bg-orange-50 mt-[2rem] py-5 px-2 md:w-[80%] md:m-auto md:mt-10 border-2 border-gray-200 ">
      <div className="flex justify-between px-2">
        <p className="text-md md:text-2xl">Write your blog here and post</p>
        <button
          className="w-[5rem] text-xs bg-orange-400 py-2 px-1 rounded-sm "
          onClick={() => setBlogForm(false)}
        >
          GO BACK
        </button>
      </div>

      <div>
        <form className="flex flex-col gap-10 md:w-[70%] mt-10 md:px-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-700 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div className="flex flex-col">
            <select
              name="serviceCategory"
              value={form.serviceCategory}
              onChange={handleInput}
              className="mt-4 border-2 border-gray-400 rounded-md py-3"
            >
              <option value={services.title}>Select Sevice Category</option>

              {services.map((service, i) => {
                return (
                  <option value={services.title} key={i + 1}>
                    {service.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col">
            <label>Blog Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-3"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Blog Content
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleInput}
              className="h-[15rem] bg-gray-50 border border-gray-700 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
        </form>
        {/* <div className="flex justify-end mt-6">
          <button
            onClick={uploadImage}
            className="bg-orange-400 px-7 py-2 rounded-md"
          >
            POST
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BlogForm;

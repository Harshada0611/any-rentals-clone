import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../../data/services";
import axios from "../../../axios";
import { toast } from "react-hot-toast";
import { nanoid } from "nanoid";
import { ImCross } from "react-icons/im";

const ServiceForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceType: "",
    subCategory: "",
    businessName: "",
    description: "",
    subServices: [],
    keyFeatures: [],
    landmark: "",
    city: "",
    state: "",
    country: "",
  });

  const token = localStorage.getItem("token");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // add subservice
  const [subServiceInput, setSubServiceInput] = useState("");
  const handleAddSubService = () => {
    if (subServiceInput.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        subServices: [...prevData.subServices, subServiceInput],
      }));
      setSubServiceInput("");
    }
  };
  // Function to remove a sub-service by its index
  const handleRemoveSubService = (index) => {
    setFormData((prevData) => {
      const updatedSubServices = prevData.subServices.filter(
        (_, i) => i !== index
      );
      return {
        ...prevData,
        subServices: updatedSubServices,
      };
    });
  };

  // add key feature
  const [keyFeatureInput, setKeyFeatureInput] = useState("");
  const handleAddKeyFeature = () => {
    if (keyFeatureInput.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        keyFeatures: [...prevData.keyFeatures, keyFeatureInput],
      }));
      setKeyFeatureInput("");
    }
  };
  // Function to remove a key feature by its index
  const handleRemoveKeyFeature = (index) => {
    setFormData((prevData) => {
      const updatedKeyFeatures = prevData.keyFeatures.filter(
        (_, i) => i !== index
      );
      return {
        ...prevData,
        keyFeatures: updatedKeyFeatures,
      };
    });
  };

  //UPLOAD  IMAGES
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState(false);
  const [finalImgArr, setFinalImgArr] = useState([]);

  // handle images
  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };
  //HANDLE SUBMIT
  const handleUploadImages = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      toast.error("Add property images !");
      return;
    }
    toast.loading("Uploading images. Please wait");
    let arr = [];
    for (let i = 0; i < images.length; i++) {
      const imgData = new FormData();
      imgData.append("upload_preset", "insta_clone");
      imgData.append("file", images[i]);
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/harshada0611/image/upload",
          imgData
        )
        .then((resp) => {
          console.log(resp);
          arr.push(resp.data.secure_url);
        })
        .catch((err) => console.log(err));
    }
    toast.dismiss();
    console.log(arr);
    if (arr.length !== 0) {
      setImgUrl(true);
    }
    setFinalImgArr(arr);
  };

  const handlePost = async () => {
    const uniqueId = nanoid(3);
    const data = {
      ...formData,
      images: finalImgArr,
      uniqueId: uniqueId,
    };
    console.log("data before posting", data);
    try {
      toast.loading("Posting data. Please wait");
      const response = await axios.post("/add-service", data, {
        headers: {
          authorization: token,
        },
      });
      if (response.data.success) {
        console.log("data saved in db", response);
        toast.success("Your business posted successfully");
        navigate("/listings");
        toast.dismiss();
      } else {
        toast.dismiss();
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (imgUrl) {
      handlePost();
    } // eslint-disable-next-line
  }, [imgUrl]);

  return (
    <div className="w-[90%] m-auto  py-5 px-2">
      <div className="flex justify-end"></div>

      <div className="container mx-auto py-8 ">
        <h2 className="text-xl font-bold py-3 px-2 rounded-sm bg-orange-400">
          Business & Service Information
        </h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          {/* Service Information Section */}
          <div className="mb-6">
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                {/* Service Type */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Service Type:
                  </label>
                  <select
                    name="serviceType"
                    className=" border-gray-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a Service Type</option>
                    {services.map((service, i) => {
                      return (
                        <option value={service.title} key={i}>
                          {service.title}
                        </option>
                      );
                    })}
                    {/* Add more options as needed */}
                  </select>
                </div>
                {/* Sub category  */}
                <div>
                  <label className="block  text-gray-700 text-sm font-bold mb-2">
                    Sub category :
                  </label>
                  <input
                    type="text"
                    id="myinput"
                    list="subcategory"
                    name="subCategory"
                    className="shadow border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.subCategory}
                    onChange={handleInputChange}
                  />
                  <p className="text-sm opacity-40 mt-2">
                    Type your subcategory e.g small yatch, lights, music,
                    cleaning
                  </p>
                  <datalist id="subcategory">
                    <option value="music"></option>
                    <option value="small boats"></option>
                    <option value="lights"></option>
                    <option value="chairs"></option>
                    <option value="bar-table"></option>
                  </datalist>
                </div>
                {/* Business Name */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Business Name:
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    className="shadow   border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.businessName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {/* Description */}
              <div className="col-span-2 mt-8">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description:
                </label>
                <textarea
                  name="description"
                  className="h-[14rem]  border-gray-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              {/* Sub Services */}
              <div className="col-span-2 mt-8">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Sub Services:
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    name="subServiceInput"
                    className="shadow  border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={subServiceInput}
                    onChange={(e) => setSubServiceInput(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleAddSubService}
                  >
                    +
                  </button>
                </div>
                {/* Display Sub Services */}
                {formData.subServices.map((subService, index) => (
                  <li key={index} className="mt-2 text-sm flex">
                    <span>{subService}</span>
                    <ImCross
                      className="text-xs mt-1 ml-4 cursor-pointer"
                      onClick={() => handleRemoveSubService(index)}
                    />
                  </li>
                ))}
              </div>

              {/* key features */}
              <div className="col-span-2 mt-8">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Key Features:
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    name="keyFeatureInput"
                    className="shadow  border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={keyFeatureInput}
                    onChange={(e) => setKeyFeatureInput(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleAddKeyFeature}
                  >
                    +
                  </button>
                </div>
                {/* Display key features */}
                {formData.keyFeatures.map((keyFeature, index) => (
                  <li key={index} className="mt-2 text-sm flex">
                    <span>{keyFeature}</span>
                    <ImCross
                      className="text-xs mt-1 ml-4 cursor-pointer"
                      onClick={() => handleRemoveKeyFeature(index)}
                    />
                  </li>
                ))}
              </div>

              {/* Images */}
              <div className="col-span-2 mt-8">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Images:
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="file"
                      name="images"
                      className="shadow  border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      multiple // Allow multiple file selection
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="flex gap-5 flex-wrap ">
                    {images.map((image) => (
                      <div className="mt-3" key={image}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt=""
                          width="100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-6 mt-10">
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Landmark */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Landmark:
                </label>
                <input
                  type="text"
                  name="landmark"
                  className="shadow  border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.landmark}
                  onChange={handleInputChange}
                />
              </div>
              {/* City */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City:
                </label>
                <input
                  type="text"
                  name="city"
                  className="shadow border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              {/* State */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  State:
                </label>
                <input
                  type="text"
                  name="state"
                  className="shadow  border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              {/* Country */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Country:
                </label>
                <input
                  type="text"
                  name="country"
                  className="shadow  border-gray-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex items-center justify-center mt-8">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleUploadImages}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;

import { useState } from "react";
import axios from "../axios";
import { toast } from "react-hot-toast";
import { nanoid } from "nanoid";

const ServiceContactForm = ({ serviceData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    serviceCategory: serviceData.serviceType,
    businessName: serviceData.businessName,
    accountId: serviceData.accountId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uniqueId = nanoid(3);
    const data = {
      ...formData,
      uniqueId: uniqueId,
    };
    try {
      toast.loading("...Sending query");
      const resp = await axios.post("/service-enquiry", data);
      if (resp.data.success) {
        toast.dismiss();
        toast.success(resp.data.message);
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
    console.log(formData);
  };

  return (
    <div
      className=" mb-20 md:mb-0 w-[90%] md:w-[22%]  md:col-span-2 m-auto px-4 border-2 rounded-md py-4 md:absolute  md:top-[70%] md:right-0 mt-8  md:mr-4   bg-orange-300"
      id="contact"
    >
      <h1 className="text-xl text-center">Contact message Form</h1>
      <form className="flex flex-col space-y-4 mt-6" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="mb-1 text-sm">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border rounded px-3 py-2 w-full border-gray-400"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="mb-1 text-sm">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border rounded px-3 py-2 w-full border-gray-400"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact" className="mb-1 text-sm">
            Contact:
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            required
            className="border rounded px-3 py-2 w-full border-gray-400"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="mb-1 text-sm">
            message Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="border rounded px-3 py-2 w-full border-gray-400"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ServiceContactForm;

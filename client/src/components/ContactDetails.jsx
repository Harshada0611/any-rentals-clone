import { FaBlenderPhone } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneMail } from "react-icons/ai";

const ContactDetails = () => {
  return (
    <div className="w-[90%] m-auto  px-4 py-5 mt-10 lg:mt-4">
      <div className="flex px-2 py-5">
        <section className="w-[15%]  flex justify-start items-center">
          <FaBlenderPhone className="text-4xl text-gray-400" />
        </section>
        <section className="w-2/3">
          <p className="text-lg text-gray-700 font-semibold">Contact No</p>
          <p className="text-lg">+123456789</p>
        </section>
      </div>
      <div className="flex  px-2 py-5">
        <section className="w-[15%]  flex justify-start items-center">
          <ImLocation2 className="text-4xl text-gray-400" />
        </section>
        <section className="w-2/3">
          <p className="text-lg text-gray-700 font-semibold">Office Address</p>
          <p className="text-lg">Umm Suqeim St - Al Barsha, Dubai, UAE</p>
        </section>
      </div>
      <div className="flex px-2 py-5">
        <section className="w-[15%]  flex justify-start items-center">
          <AiTwotoneMail className="text-4xl text-gray-400" />
        </section>
        <section className="w-2/3">
          <p className="text-lg text-gray-700 font-semibold">Email Address</p>
          <p className="text-lg">info@dubairentals.ae</p>
        </section>
      </div>
    </div>
  );
};

export default ContactDetails;

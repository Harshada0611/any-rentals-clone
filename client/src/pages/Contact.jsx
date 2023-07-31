import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";
import MapLocation from "../components/MapLocation";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="pb-10">
      <div className="w-full h-[5rem] bg-gray-800"></div>
      <div className="relative">
        <MapLocation />
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 lg:mt-10 ">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;

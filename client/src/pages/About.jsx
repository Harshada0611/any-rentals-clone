import { useEffect } from "react";
import AboutBanner from "../components/AboutBanner";
import AboutData from "../components/AboutData";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <AboutBanner />
      <AboutData />
    </div>
  );
};

export default About;

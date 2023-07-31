import { useEffect } from "react";
import HomeBanner from "../components/HomeBanner";
import CategoriesWrap from "../components/CategoriesWrap";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className=" ">
      <HomeBanner />
      <CategoriesWrap />
      <WhyChooseUs />
    </div>
  );
};

export default Home;

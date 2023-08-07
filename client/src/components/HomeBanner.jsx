import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const imgArr = [
 "https://media.architecturaldigest.com/photos/5f3bc30ba195222631e5d35b/16:9/w_2560%2Cc_limit/GettyImages-1151868130.jpg",
  "https://images7.alphacoders.com/110/thumb-1920-1108495.png",
  "https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const LinearProgressBar = ({ fillPercentage }) => {
  return (
    <LinearProgress
      variant="determinate"
      value={fillPercentage}
      transitionDuration={fillPercentage === 0 ? 0 : 1000} // Control the transition duration
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        color: "red",
        height: 3,
        borderRadius: 9999,
        backgroundColor: "white",
      }}
    />
  );
};

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    const animationDuration = 6000; // Time in milliseconds to complete the animation
    const intervalTime = 50; // Interval time in milliseconds for updating the fill percentage
    const steps = animationDuration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const percentage = (currentStep / steps) * 100;
      setFillPercentage(percentage);

      if (currentStep >= steps) {
        clearInterval(interval);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArr.length);
        setFillPercentage(0);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, imgArr.length]);

  return (
    <div
      className="w-full h-[40rem] md:h-[44rem] relative"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="900"
    >
      {imgArr.map((img, index) => {
        return (
          <img
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            src={imgArr[currentIndex]}
            alt=""
          />
        );
      })}
      <LinearProgressBar fillPercentage={fillPercentage} />
      <div className="absolute text-center text-orange-300 w-full h-full flex flex-col justify-center bg-[rgba(0,0,0,0.2)] px-2 py-10">
        <h1 className="text-2xl lg:text-4xl ">
          RENT ALMOST ANYTHING RIGHT HERE
        </h1>
        <p className="text-sm lg:text-xl mt-2 text-white ">
          Whatever rental you need in the UAE and beyond, you can find it here.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;

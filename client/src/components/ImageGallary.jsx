import { useState } from "react";

const ImageGallary = ({ serviceData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="h-[31rem] border-[1px] mt-4 " id="gallary">
      {/* image section */}
      <div
        className="w-full h-full grid  grid-cols-1 md:grid-cols-3  m-auto  md:w-[100%]  md:h-[25rem]"
        id="gallary"
      >
        <div className="w-[100%] h-full md:col-span-2">
          <img
            src={serviceData.images[currentIndex]}
            className="w-full h-[20rem] md:h-[30rem]"
          />
        </div>
        <div className="flex gap-3 md:flex-col m-auto overflow-auto mt-3 md:h-full md:col-span-1 md:w-full md:mt-0 md:px-2">
          {serviceData.images.map((img, i) => {
            return (
              <img
                src={img}
                alt=""
                key={i + 1}
                className="w-[9rem] h-[7rem] object-cover md:w-full md:h-[15rem]"
                onClick={() => setCurrentIndex(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallary;

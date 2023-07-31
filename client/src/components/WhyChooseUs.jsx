import Slider from "react-slick";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useState } from "react";
import { whyChoose } from "../data/whyChoose";

const WhyChooseUs = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow next text-black sm:bg-[rgba(255,255,255,0.6)] p-1 sm:p-3 rounded-[50%] "
        onClick={onClick}
      >
        <MdOutlineArrowForwardIos />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev text-black sm:bg-[rgba(255,255,255,0.6)] p-1 sm:p-3 rounded-[50%] "
        onClick={onClick}
      >
        <MdOutlineArrowBackIos />
      </div>
    );
  };
  const [cardIndex, setCardIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCardIndex(next),
  };

  return (
    <div className="mt-10 h-[40rem] sm:h-[35rem] pt-6 text-center bg-[url('https://images7.alphacoders.com/110/thumb-1920-1108495.png')] bg-center bg-cover">
      <header>
        <h2 className="text-2xl sm:text-[2rem]">
          Easy Renting, Massive Choice
        </h2>
        <p className="text-sm w-[90%] mt-4 sm:w-[93%] m-auto">
          We put all your rental needs in one easy to use place. Our simple,
          easy to use interface makes finding everything you need a pleasure.
          Search for any rental need you have and quickly find a quality
          solution near your location.
        </p>
      </header>
      <div className="mt-8 sm:w-[80%] sm:m-auto sm:mt-12 ">
        <div className="h-[20rem]" data-aos="fade-up">
          <Slider
            {...settings}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {whyChoose.map((card, index) => {
              return (
                <div
                  key={index}
                  className="h-[23rem] flex justify-center items-center"
                >
                  <div
                    className="w-[100%] md:w-[85%] bg-white m-auto rounded pt-3 pb-2 px-1 shadow-md shadow-slate-50 "
                    style={{
                      height: index === cardIndex ? "25rem" : "18rem",
                      marginTop: index === cardIndex ? "0" : "3rem",
                      // opacity: index === cardIndex ? "1" : "0.6",
                    }}
                  >
                    <h1
                      className="mt-4 text-orange-500 text-xl"
                      // style={{ opacity: index === cardIndex ? "1" : "0.4" }}
                    >
                      {card.title}
                    </h1>
                    <p
                      className="w-[97%] px-5 text-justify text-slate-700"
                      style={{
                        // opacity: index === cardIndex ? "1" : "0.4",
                        marginTop: index === cardIndex ? "1rem" : "1rem",
                      }}
                    >
                      {card.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

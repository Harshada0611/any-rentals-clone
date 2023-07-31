import { aboutData } from "../data/about";

const AboutData = () => {
  return (
    <div
      className=" w-[95%] m-auto mt-12
    grid grid-cols-1 grid-rows-6
    sm:grid-cols-2 sm:grid-rows-3
    md:grid-cols-2  md:grid-rows-3 
    xl:grid-cols-3 xl:grid-rows-2 
    border-[1px] py-4
    gap-4 bg-yellow-50"
    >
      {aboutData.map((data, index) => {
        return (
          <div
            key={index + 1}
            className=" p-4  flex flex-col justify-center items-center gap-5"
          >
            <div className=" w-[3rem] h-[3rem]">
              <img src={data.img} alt="" className="w-full h-full opacity-70" />
            </div>
            <div className="h-[2rem] text-xl text-orange-500">
              <h1>{data.title}</h1>
            </div>
            <div className=" h-[9rem] text-center text-slate-600 sm:px-6">
              <p>{data.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutData;

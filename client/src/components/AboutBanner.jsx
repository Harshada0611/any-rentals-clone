const AboutBanner = () => {
  return (
    <div
      className="w-full h-[40rem] sm:h-[35rem] bg-[url('https://www.whitebricks.ae/wp-content/uploads/2023/01/blog-post-10.jpg')] bg-center bg-cover
    relative"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="900"
    >
      <div
        className="w-[95%] sm:w-[40rem] 
        absolute 
        top-[20%] left-[2.5%] 
        sm:top-[25%] sm:left-[10%]
        md:top-[27%]  md:left-[13%]
        xl:left-[50%] 
        px-4 py-4 sm:px-10 sm:pt-6 sm:pb-8 bg-[rgba(255,255,255,0.8)]"
        data-aos="flip-right"
        data-aos-duration="700"
      >
        <h1 className="text-center text-2xl text-orange-500">
          THE DUBAI RENTALS
        </h1>
        <p className="text-black text-justify mt-4 sm:mt-6 sm:text-[1.1rem]">
          Dubai is known for its luxurious lifestyle and many expats and
          tourists choose to rent properties in the city. Rental prices in Dubai
          can vary depending on the location, size, amenities of the property.
          What if you could go to one, single website and not only search for
          the best deals on all of things in one place, but be sure that every
          offer you see is from high quality, trustworthy providers? That would
          save a lot of time, but also ensure that your event is the best it can
          be. That is the Anyrentals difference. Here you can search for any
          rental product or service you need, and quickly find it locally. One
          site, one search, one rental hotspot for all your needs.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;

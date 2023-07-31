const MapLocation = () => {
  return (
    <section className="w-full">
      <iframe
        id="mapIframe"
        src={`https://maps.google.com/maps?q=Umm Suqeim St Al Barsha, Dubai, UAE&hl=es;&output=embed`}
        title="locationOnMap"
        className="w-full h-[25rem]"
      ></iframe>
    </section>
  );
};

export default MapLocation;

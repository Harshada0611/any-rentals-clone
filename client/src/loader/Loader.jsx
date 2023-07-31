import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading flex  justify-center items-center  h-[20rem] w-full">
      <BeatLoader color="orange" />
    </div>
  );
}

export default Loader;

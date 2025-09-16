import React from "react";
import { movieImageUrl } from "../utils/constants/ImgConst";

const Tvmoviecard = ({ poster, backdrop }) => {
  const imageUrl = poster
    ? movieImageUrl + poster
    : backdrop
    ? movieImageUrl + backdrop
    : "/fallback.jpg"; // ✅ fallback for missing posters/backdrops

  return (
    <div className="w-32 h-48 sm:w-40 sm:h-60 md:w-56 md:h-80 lg:w-48 lg:h-72 flex-shrink-0 p-2 cursor-pointer">
      <img
        src={imageUrl}
        alt="media"
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
  );
};

export default Tvmoviecard;

import React from 'react';
import { movieImageUrl } from '../utils/constants/ImgConst';

const Moviecard = ({ img }) => {
  return (
    <div className="w-22 h-48 sm:w-40 sm:h-60 md:w-56 md:h-80 lg:w-48 lg:h-auto flex-shrink-0 p-2">
      <img
        src={movieImageUrl + img}
        alt="movie"
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
  );
};

export default Moviecard;

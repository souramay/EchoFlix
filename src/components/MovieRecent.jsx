import { FaStar, FaFire, FaPlay, FaInfoCircle } from "react-icons/fa";

const MovieRecent = ({ title, overview, vote, popularity, release }) => {
  return (
    <div className="relative w-full h-full z-0 mt-64">
      <div className="text-white p-2 md:p-6 sm:p-4 mx-2 md:ml-8 sm:ml-4">
        {title && (
          <div className="w-full md:w-2/3 sm:w-1/2">
            <h2 className="text-3xl sm:text-6xl md:text-5xl font-bold font-serif">{title}</h2>
            <div className="flex flex-row flex-wrap gap-4 items-center my-2 md:my-6 sm:my-4">
              <p className="">( {release} )</p>
              <p className="flex items-center">
                {popularity}
                <FaFire className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 ml-1" />
              </p>
              <p className="flex items-center">
                {vote}
                <FaStar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 ml-1" />
              </p>
            </div>
            {/* Make the description div smaller */}
            <div className="w-2/3">
              <p className="opacity-60 text-sm sm:text-base md:text-lg">{overview}</p>
            </div>
            <div className="flex flex-row gap-6 items-center p-2 mt-4 w-full">
              <button className="flex justify-center items-center w-40 bg-white text-black px-6 py-2 rounded hover:opacity-80 text-base">
                <FaPlay className="w-6 h-6 mr-2" />
                Play
              </button>
              <button className="flex justify-center items-center w-40 bg-gray-700 opacity-85 text-white px-6 py-2 rounded hover:bg-gray-600 text-base">
                <FaInfoCircle className="w-6 h-6 mr-2" />
                More Info
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieRecent;

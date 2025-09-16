import { FaStar, FaFire, FaPlay, FaInfoCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVideo } from "../utils/redux/DetailMovieSlice";
import { setTvVideo } from "../utils/redux/tvdetailslice";

const MovieRecent = ({ title, overview, vote, popularity, release, id, videoKey }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location=useLocation();

  const handlePlayClick = () => {
    if(location.pathname==="/tvBrowse"){
                    navigate(`/tvdetail/${id}`);
                    dispatch(setTvVideo(id));
                  }
                  else{
                    navigate(`/detail/${id}`);
                    dispatch(setVideo(id));
                  }
  };

  return (
    <div className="relative w-full h-full z-0 mt-64">
      <div className="text-white p-2 md:p-6 sm:p-4 mx-2 md:ml-8 sm:ml-4">
        {title && (
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif">{title}</h2>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-4 items-center my-2 md:my-4 lg:my-6">
              <p className="text-xs sm:text-sm md:text-base">( {release} )</p>
              <p className="flex items-center text-xs sm:text-sm md:text-base">
                {popularity}
                <FaFire className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-500 ml-1" />
              </p>
              <p className="flex items-center text-xs sm:text-sm md:text-base">
                {vote}
                <FaStar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 ml-1" />
              </p>
            </div>
            <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
              <p className="opacity-60 text-xs sm:text-sm md:text-base lg:text-lg line-clamp-3">{overview}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-start sm:items-center mt-4 sm:mt-6">
              <button
                className="cursor-pointer flex justify-center items-center w-full sm:w-36 md:w-40 lg:w-44 bg-white text-black px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded hover:opacity-80 text-sm sm:text-base whitespace-nowrap"
                onClick={handlePlayClick}
                disabled={!id}
                title={!id ? "No details available" : ""}
              >
                <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Play
              </button>
              <button
                className="cursor-pointer flex justify-center items-center w-full sm:w-36 md:w-40 lg:w-44 bg-gray-700 opacity-85 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded hover:bg-gray-600 text-sm sm:text-base whitespace-nowrap"
                onClick={() => {
                  if(location.pathname==="/tvBrowse"){
                    navigate(`/tvdetail/${id}`);
                    dispatch(setTvVideo(id));
                  }
                  else{
                    navigate(`/detail/${id}`);
                    dispatch(setVideo(id));
                  }
                 
                }}
              >
                <FaInfoCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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

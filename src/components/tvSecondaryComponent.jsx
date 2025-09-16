import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTvVideo } from "../utils/redux/tvdetailslice";
import Tvmoviecard from "./Tvmoviecard";

const TvSecondaryComponent = ({ title, items, mediaType = "movie" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(setTvVideo({ id, mediaType }));
    navigate(`/tvdetail/${id}`);
  };

  // Only render if items exist and have length
  if (!items || items.length === 0) return null;

  return (
    <div className="sm:-mt-6 md:-mt-6 lg:-mt-25 mb-6 md:mb-8">
      {/* Render title only if it exists and is not empty */}
      {title?.trim() && (
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-3">{title}</h1>
      )}

      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide px-0 py-0">
        {items.map((item) => {
          // Only render the card if poster or backdrop image exists
          if (!item.poster_path && !item.backdrop_path) {
            return null;
          }

          return (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="inline-block w-32 h-48 sm:w-40 sm:h-60 md:w-56 md:h-80 lg:w-64 lg:h-96 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <Tvmoviecard poster={item.poster_path} backdrop={item.backdrop_path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TvSecondaryComponent;

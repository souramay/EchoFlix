import { useDispatch } from "react-redux";
import Moviecard from "./Moviecard";
import { useNavigate } from "react-router-dom";
import { setVideo } from "../utils/redux/DetailMovieSlice";
import Tvmoviecard from "./Tvmoviecard";

const TvSecondary = ({ title, items, mediaType = "movie" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(setVideo({ id, mediaType })); // ✅ send id + mediaType
    navigate(`/tvdetail/${id}`);
  };

  return (
    <div className="sm:-mt-6 md:-mt-6 lg:-mt-25 mb-6 md:mb-8">
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-3">
        {title}
      </h1>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide px-0 py-0">
        {items?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="inline-block w-32 h-48 sm:w-40 sm:h-60 md:w-56 md:h-80 lg:w-64 lg:h-96 hover:scale-110 transition-transform duration-300"
          >
            <Tvmoviecard poster={item.poster_path} backdrop={item.backdrop_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvSecondary;

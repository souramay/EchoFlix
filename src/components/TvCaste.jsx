import { useSelector } from "react-redux";
import useFetchCaste from "../utils/Hooks/usefetchcaste";
import { IMAGE_BASE } from "../utils/constants/ImgConst";



const TvCaste = ({ movieId }) => {
  useFetchCaste(movieId);
  const cast = useSelector(state => state.tvdetails.caste) || [];

  // Main actors: top 8 by order
  const mainActors = cast
    .filter(actor => actor.profile_path)
    .sort((a, b) => a.order - b.order)
    .slice(0, 8);

  return (
    <div className="flex flex-col gap-8 mt-8 mb-8">
      {/* Main Cast */}
      <h2 className="text-2xl font-bold mb-4 text-center">Main Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {mainActors.map(actor => (
          <div
            key={actor.id}
            className="group bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <a
              href={`https://www.themoviedb.org/person/${actor.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-full"
            >
              <div className="overflow-hidden rounded-full w-24 h-24 lg:w-32 lg:h-32 mb-2">
                <img
                  src={actor.profile_path ? `${IMAGE_BASE}${actor.profile_path}` : ""}
                  alt={actor.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-100">{actor.name}</div>
                <div className="text-sm text-gray-400 italic">
                  {actor.character}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvCaste;

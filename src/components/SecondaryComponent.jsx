import { useSelector } from "react-redux";
import Moviecard from "./Moviecard";

const SecondaryComponent = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-0">{title}</h1>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide px-0 py-0">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className="inline-block w-32 h-48 sm:w-40 sm:h-60 md:w-56 md:h-80 lg:w-64 lg:h-96"
          >
            <Moviecard img={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryComponent;

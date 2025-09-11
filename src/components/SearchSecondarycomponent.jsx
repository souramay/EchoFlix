import Moviecard from "./Moviecard";

const SearchSecondarycomponents = ({ title, movies }) => {
   return (
    <div className="sm:-mt-6 md:-mt-6  mb-6 md:mb-8">
      <h3 className="text-white text-sm font-bold mb-3">{title}</h3>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide px-0 py-0">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className="inline-block w-32 h-48 sm:w-40 sm:h-60 md:w-56 md:h-80 lg:w-64 lg:h-96 hover:scale-110 transition-transform duration-300"
          >
           { movie.poster_path && <Moviecard img={movie.poster_path} /> }
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSecondarycomponents;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSimilarfetch from '../utils/Hooks/useSimilarfetch';
import useRecommendedfetch from '../utils/Hooks/useRecommendedfetch';
import { useNavigate } from 'react-router-dom';
import { setVideo } from '../utils/redux/DetailMovieSlice';

const Similar = ({ movieId }) => {
  const dispatch = useDispatch();
  const similar = useSelector((state) => state.details.Similar) || [];
  const recommended = useSelector((state) => state.details.Recommended) || [];
  const navigate = useNavigate();

  useSimilarfetch(movieId);
  useRecommendedfetch(movieId);

  // Toggle state: "similar", "recommended", or "all"
  const [filter, setFilter] = useState("all");

  // Filtered movies based on toggle
  let moviesToShow = [];
  if (filter === "similar") moviesToShow = similar;
  else if (filter === "recommended") moviesToShow = recommended;
  else moviesToShow = [...similar, ...recommended];

  return (
    <div>
      <div className="flex gap-4 mb-4 justify-center">
        <button
          className={`px-4 py-1 rounded ${filter === "all" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-300"} transition`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-1 rounded ${filter === "similar" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-300"} transition`}
          onClick={() => setFilter("similar")}
        >
          Similar
        </button>
        <button
          className={`px-4 py-1 rounded ${filter === "recommended" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-300"} transition`}
          onClick={() => setFilter("recommended")}
        >
          Recommended
        </button>
      </div>
      <h2 className="text-base lg:text-lg font-bold text-gray-300 mb-2 text-center lg:text-left">
        {filter === "similar" ? "Similar Movies" : filter === "recommended" ? "Recommended Movies" : "Similar & Recommended Movies"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {moviesToShow.length === 0 ? (
          <div className="text-gray-500 text-center col-span-full">No movies found.</div>
        ) : (
          moviesToShow.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg p-2 flex flex-col items-center cursor-pointer hover:bg-gray-700 transition"
              onClick={() => {
                dispatch(setVideo(movie.id));
                navigate(`/detail/${movie.id}`);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <div className="text-gray-100 text-xs font-semibold text-center">{movie.title}</div>
              <div className="text-gray-400 text-xs text-center">{movie.release_date}</div>
              <div className="text-yellow-400 text-xs text-center">★ {movie.vote_average}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Similar;

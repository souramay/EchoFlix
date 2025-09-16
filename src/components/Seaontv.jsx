import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useFetchseason from '../utils/Hooks/useFetchseason';

const Seasontv = ({ tvId }) => {
  const detail = useSelector((state) => state.tvdetails.detail);
  const seasonData = useSelector((state) => state.tvdetails.TVSeason);
  const [activeSeason, setActiveSeason] = useState(null);

  useFetchseason(tvId, activeSeason);

  const handleAccordionClick = (season_number) => {
    setActiveSeason((prev) => (prev === season_number ? null : season_number));
  };

  if (!detail?.seasons || detail.seasons.length === 0) {
    return <p className="text-center text-gray-400">No season information available.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-6 px-6">
      {detail.seasons.map((season) => (
        <div
          key={season.id}
          className="bg-gray-900 rounded-lg shadow-lg border border-gray-700 overflow-hidden"
        >
          <button
            onClick={() => handleAccordionClick(season.season_number)}
            className="w-full flex justify-between items-center px-6 py-4 hover:bg-gray-800 transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={
                  season.poster_path
                    ? `https://image.tmdb.org/t/p/w92${season.poster_path}`
                    : '/no-image.jpg'
                }
                alt={`Season ${season.season_number}`}
                className="w-20 h-28 rounded-md object-cover shadow-sm"
              />
              <div>
                <h3 className="text-white text-xl font-semibold">{season.name}</h3>
                <p className="text-gray-400 text-sm">
                  Air Date: {season.air_date || 'Unknown'}
                </p>
                <p className="text-gray-400 text-sm italic max-w-xl truncate">
                  {season.overview || 'No overview available for this season.'}
                </p>
              </div>
            </div>

            <span className="text-3xl text-gray-400 select-none">
              {activeSeason === season.season_number ? '−' : '+'}
            </span>
          </button>

          {activeSeason === season.season_number && (
            <div className="px-6 py-6 bg-gray-800 border-t border-gray-700">
              {seasonData?.season_number === activeSeason && seasonData.episodes.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {seasonData.episodes.map((ep) => (
                    <div
                      key={ep.id}
                      className="flex gap-4 bg-gray-900 rounded-md p-4 shadow-inner hover:bg-gray-700 transition"
                    >
                      <img
                        src={
                          ep.still_path
                            ? `https://image.tmdb.org/t/p/w185${ep.still_path}`
                            : season.poster_path
                            ? `https://image.tmdb.org/t/p/w185${season.poster_path}`
                            : '/no-image.jpg'
                        }
                        alt={ep.name}
                        className="w-32 h-18 sm:w-auto sm:h-auto rounded-md object-cover flex-shrink-0"
                      />
                      <div className="flex flex-col justify-between ">
                        <div>
                          <h4 className="text-gray-200 font-semibold text-lg">
                            Ep {ep.episode_number}: {ep.name}
                          </h4>
                          <p className="text-gray-400 text-sm italic mb-1">
                            Air Date: {ep.air_date || 'Unknown'}
                          </p>
                          <p className="text-gray-400 text-sm mb-2 line-clamp-3">
                            {ep.overview || 'No episode overview available.'}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <span>Runtime: {ep.runtime ? `${ep.runtime} min` : 'N/A'}</span>
                          <span>⭐ {ep.vote_average?.toFixed(1) || 'N/A'}</span>
                          <span>Votes: {ep.vote_count || 0}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No episodes found for this season.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Seasontv;

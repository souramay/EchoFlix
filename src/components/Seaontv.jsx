import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchseason from '../utils/Hooks/useFetchseason';
import useTvSeasonVideo from '../utils/Hooks/tvseasonVideo';
import { setVideoplay } from '../utils/redux/DetailMovieSlice';
import { setTvVideoplay } from '../utils/redux/tvdetailslice';

const Seasontv = ({ tvId,playerRef}) => {
  const detail = useSelector((state) => state.tvdetails.detail);
  const seasonData = useSelector((state) => state.tvdetails.TVSeason);
  const video=useSelector((state)=>state.tvdetails.tvseasomvideo)
  const videoplay = useSelector((state) => state.tvdetails.videoplay);
  const dispatch=useDispatch();
 

  const [activeSeason, setActiveSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState({ season: null, episode: null });
  



 useFetchseason(tvId, activeSeason);

  // Call the hook here, at top level
  useTvSeasonVideo(tvId, selectedEpisode.season, selectedEpisode.episode);

  const handleAccordionClick = (season_number) => {
    setActiveSeason((prev) => (prev === season_number ? null : season_number));
  };

  // This function sets state to trigger the hook
  const handleEpisodeClick = (episode_number, season_number) => {
    setSelectedEpisode({ season: season_number, episode: episode_number });
  };

  if (!detail?.seasons || detail.seasons.length === 0) {
    return <p className="text-center text-gray-400">No season information available.</p>;
  }


  // Pick a random video whenever 'video' changes
  useEffect(() => {
    if (video?.results && video.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * video.results.length);
      const randomVideo = video.results[randomIndex];
      dispatch(setTvVideoplay(randomVideo));
    } 
  }, [video]);
  useEffect(() => {
  if (videoplay && playerRef?.current) {
    playerRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [videoplay, playerRef]);

  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-6 px-4 sm:px-6">
      {detail.seasons.map((season) => (
        <div
          key={season.id}
          className="bg-gray-900 rounded-lg shadow-lg border border-gray-700 overflow-hidden"
        >
          <button
            onClick={() => handleAccordionClick(season.season_number)}
            className="w-full flex flex-row justify-between items-center px-4 py-4 hover:bg-gray-800 transition"
          >
            <div className="flex items-center gap-4 flex-grow min-w-0">
              <img
                src={
                  season.poster_path
                    ? `https://image.tmdb.org/t/p/w92${season.poster_path}`
                    : '/no-image.jpg'
                }
                alt={`Season ${season.season_number}`}
                className="w-16 h-24 rounded-md object-cover shadow-sm flex-shrink-0"
              />
              <div className="flex flex-col min-w-0 text-left">
                <h3 className="text-white font-semibold text-base sm:text-xl whitespace-nowrap">
                  Season {season.season_number}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                  Air Date: {season.air_date || 'Unknown'}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm italic max-w-[200px] sm:max-w-xl truncate">
                  {season.overview || 'No overview available for this season.'}
                </p>
              </div>
            </div>

            <span className="text-3xl text-gray-400 select-none ml-4">
              {activeSeason === season.season_number ? '−' : '+'}
            </span>
          </button>

          {activeSeason === season.season_number && (
            <div className="px-4 py-6 bg-gray-800 border-t border-gray-700">
              {seasonData?.season_number === activeSeason && seasonData.episodes.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {seasonData.episodes.map((ep) => (
                    <div
                      key={ep.id}
                      className="flex flex-col sm:flex-row gap-4 bg-gray-900 rounded-md p-4 shadow-inner hover:bg-gray-700 transition"
                    >
                      <img
                        src={
                          ep.still_path
                            ? `https://image.tmdb.org/t/p/w185${ep.still_path}`
                            : season.poster_path
                            ? `https://image.tmdb.org/t/p/w185${detail.backdrop_path}`
                            : '/no-image.jpg'
                        }
                        onClick={() => handleEpisodeClick(ep.episode_number, season.season_number)}
                        alt={ep.name}
                        className="w-full max-w-full h-auto sm:w-32 sm:h-18 rounded-md object-cover flex-shrink-0"
                      />
                      <div
                        className="flex flex-col justify-between cursor-pointer"
                        onClick={() => handleEpisodeClick(ep.episode_number, season.season_number)}
                      >
                        <div>
                          <h4 className="text-gray-200 font-semibold text-base sm:text-lg">
                            Ep {ep.episode_number}: {ep.name}
                          </h4>
                          <p className="text-gray-400 text-xs sm:text-sm italic mb-1">
                            Air Date: {ep.air_date || 'Unknown'}
                          </p>
                          <p className="text-gray-400 text-xs sm:text-sm mb-2 line-clamp-3 break-words">
                            {ep.overview || 'No episode overview available.'}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs sm:text-sm">
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

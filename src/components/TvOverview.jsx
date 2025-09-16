import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaLanguage,
  FaFilm,
  FaBuilding,
  FaFlag,
  FaStar,
  FaMoneyBillWave,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaFire,
  FaLink,
  FaQuoteLeft,
  FaQuoteRight,
  FaIdBadge,
  FaImage,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import useFetchtvDetails from "../utils/Hooks/useFetchtvDetails";

const TvOverview = ({ tvId }) => {
  const detail = useSelector((state) => state.tvdetails.detail) || {};

  // Trigger fetch on mount or tvId change
  useFetchtvDetails(tvId);

  return (
    <div className="rounded-2xl shadow-2xl p-8 max-w-3xl lg:max-w-6xl mx-auto text-gray-100 border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8 lg:gap-16 lg:items-start">
        {detail.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
            alt={detail.name}
            className="rounded-xl shadow-lg w-40 lg:w-64 border-2 border-gray-700 object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}
        <div className="w-full lg:w-2/3 flex flex-col justify-center lg:justify-start">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-2 tracking-tight text-gray-200 drop-shadow flex items-center gap-2">
            <FaFilm className="text-gray-400" /> {detail.name}
          </h2>

          {detail.original_name && detail.original_name !== detail.name && (
            <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-1 flex items-center gap-2">
              <FaLanguage className="text-gray-500" />{" "}
              <span className="font-semibold">{detail.original_name}</span>
            </p>
          )}

          {detail.tagline && (
            <p className="text-sm sm:text-lg lg:text-xl italic text-gray-400 mb-2 flex items-center gap-2">
              <FaQuoteLeft className="text-gray-500" /> {detail.tagline}
            </p>
          )}

          {detail.belongs_to_collection?.name && (
            <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-2 flex items-center gap-2">
              <FaFilm className="text-gray-500" />{" "}
              <span className="font-semibold">
                {detail.belongs_to_collection.name}
              </span>
            </p>
          )}
        </div>
      </div>

      <p className="mb-8 text-sm sm:text-lg lg:text-xl leading-relaxed bg-gray-900 bg-opacity-40 rounded-xl p-4 flex items-center gap-2 border border-gray-700">
        <FaQuoteRight className="text-gray-500" /> {detail.overview}
      </p>

      {/* Collection Main Image */}
      {(detail.belongs_to_collection?.poster_path ||
        detail.belongs_to_collection?.backdrop_path) && (
        <div className="mb-8 flex justify-center items-center">
          <img
            src={
              detail.belongs_to_collection?.poster_path
                ? `https://image.tmdb.org/t/p/w500${detail.belongs_to_collection.poster_path}`
                : `https://image.tmdb.org/t/p/w780${detail.belongs_to_collection.backdrop_path}`
            }
            alt={
              detail.belongs_to_collection?.poster_path
                ? detail.belongs_to_collection.name + " Poster"
                : detail.belongs_to_collection.name + " Backdrop"
            }
            className="rounded-xl shadow-lg border-2 border-gray-700 object-cover w-64 lg:w-96"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      {detail.backdrop_path && (
        <div className="mb-8 flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w780${detail.backdrop_path}`}
            alt="Backdrop"
            className="rounded-xl shadow-lg max-h-56 lg:max-h-[28rem] object-cover border-2 border-gray-700 w-full"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 mb-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaCalendarAlt className="text-gray-400" />
          <span className="font-semibold text-gray-300">First Air Date:</span>
          <span>{detail.first_air_date}</span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaClock className="text-gray-400" />
          <span className="font-semibold text-gray-300">Episode Runtime:</span>
          <span>
            {detail.episode_run_time?.length
              ? `${detail.episode_run_time[0]} min`
              : "N/A"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaCheckCircle className="text-gray-400" />
          <span className="font-semibold text-gray-300">Status:</span>
          <span>{detail.status}</span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaLanguage className="text-gray-400" />
          <span className="font-semibold text-gray-300">Lang:</span>
          <span>{detail.original_language?.toUpperCase()}</span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaFilm className="text-gray-400" />
          <span className="font-semibold text-gray-300">Genres:</span>
          <span>{detail.genres?.map((genre) => genre.name).join(", ")}</span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaGlobe className="text-gray-400" />
          <span className="font-semibold text-gray-300">Spoken:</span>
          <span>
            {detail.spoken_languages
              ?.map((lang) => lang.english_name)
              .join(", ")}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaFlag className="text-gray-400" />
          <span className="font-semibold text-gray-300">Origin:</span>
          <span>{detail.origin_country?.join(", ")}</span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaFire className="text-gray-400" />
          <span className="font-semibold text-gray-300">Popularity:</span>
          <span>{detail.popularity}</span>
        </div>

        {/* Adult is movie-specific, show only if present */}
        {typeof detail.adult !== "undefined" && (
          <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
            {detail.adult ? (
              <FaTimesCircle className="text-red-400" />
            ) : (
              <FaCheckCircle className="text-green-400" />
            )}
            <span className="font-semibold text-gray-300">Adult:</span>
            <span>{detail.adult ? "Yes" : "No"}</span>
          </div>
        )}

        {/* Video flag is movie-specific, skip for TV */}

        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base">
          <FaIdBadge className="text-gray-400" />
          <span className="font-semibold text-gray-300">TV ID:</span>
          <span>{detail.id}</span>
        </div>
      </div>

      {/* Companies & Countries Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-8 justify-center items-stretch lg:items-start">
        <div className="flex flex-col items-start w-full md:w-auto lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <FaBuilding className="text-gray-400" />
            <span className="font-bold text-gray-300 text-lg">
              Production Companies
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            {detail.production_companies && detail.production_companies.length > 0
              ? detail.production_companies.map((company) => (
                  <span
                    key={company.id}
                    className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 px-2 py-2 lg:px-6 lg:py-4 rounded-lg text-sm lg:text-base font-semibold border border-gray-700 flex items-center gap-2 shadow-lg w-full lg:w-auto"
                  >
                    {company.logo_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                        alt={company.name}
                        className="inline-block h-8 w-8 lg:h-12 lg:w-12 rounded bg-gray-900 p-1 border border-gray-500 shadow-lg"
                        style={{ backgroundColor: "#fff" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    )}
                    <span>{company.name}</span>
                    {company.origin_country ? (
                      <span className="text-blue-300 font-bold">
                        ({company.origin_country})
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                ))
              : <span className="text-gray-400">N/A</span>}
          </div>
        </div>

        <div className="flex flex-col items-start w-full md:w-auto lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <FaFlag className="text-gray-400" />
            <span className="font-bold text-gray-300 text-lg">
              Production Countries
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            {detail.production_countries && detail.production_countries.length > 0
              ? detail.production_countries.map((country, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 px-4 py-2 rounded-lg text-sm lg:text-base font-semibold border border-gray-700 shadow-lg"
                  >
                    {country.name}
                  </span>
                ))
              : <span className="text-gray-400">N/A</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvOverview;

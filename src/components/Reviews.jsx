import { useSelector } from "react-redux";
import useReviewfetch from "../utils/Hooks/useReviewfetch";
import { FaUserCircle, FaStar, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const getAvatarUrl = (avatarPath) => {
  if (!avatarPath) return "";
  return avatarPath.startsWith("/https")
    ? avatarPath.slice(1)
    : `https://image.tmdb.org/t/p/w45${avatarPath}`;
};

const Reviews = ({ movieId }) => {
  const reviews = useSelector((state) => state.details.Reviews) || [];
  useReviewfetch(movieId);

  return (
    <div className="space-y-6">
      {reviews.length === 0 && (
        <div className="text-gray-400 text-center text-sm sm:text-base">No reviews found.</div>
      )}
      {reviews.map((review) => {
        const avatarUrl = getAvatarUrl(review.author_details.avatar_path);

        return (
          <div
            key={review.id}
            className="bg-gray-900 rounded-xl p-4 border border-gray-700 flex flex-col sm:flex-row gap-4 items-start"
          >
            <div className="flex-shrink-0">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={review.author}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-800"
                />
              ) : (
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 text-2xl">
                  <FaUserCircle />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <span className="font-semibold text-xs sm:text-sm text-gray-100 flex items-center gap-1">
                  <FaUserCircle className="inline-block" />
                  {review.author_details.name || review.author}
                </span>
                <span className="text-xs text-gray-400">
                  @{review.author_details.username}
                </span>
                {review.author_details.rating !== null && (
                  <span className="text-xs text-yellow-400 font-semibold flex items-center gap-1">
                    <FaStar className="inline-block" />
                    {review.author_details.rating}/10
                  </span>
                )}
              </div>
              <div className="text-gray-300 text-xs sm:text-sm whitespace-pre-line mb-2">
                {review.content}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="inline-block" />
                  {new Date(review.created_at).toLocaleDateString()} 
                  {review.updated_at && (
                    <> (Updated: {new Date(review.updated_at).toLocaleDateString()})</>
                  )}
                </span>
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <FaExternalLinkAlt className="inline-block" />
                  Read on TMDb
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;

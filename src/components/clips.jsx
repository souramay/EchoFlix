import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setVideoplay } from "../utils/redux/DetailMovieSlice";

const VIDEO_TYPES = [
    "All",
    "Trailer",
    "Teaser",
    "Clip",
    "Featurette",
    "Behind the Scenes",
    "Song",
    "Music"
];

const Clips = ({ playerRef }) => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.details.trailer) || [];
    const [filter, setFilter] = useState("All");

    const handleClick = (video) => {
        dispatch(setVideoplay(video));
        if (playerRef && playerRef.current) {
            playerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const filteredVideos = filter === "All"
        ? videos
        : videos.filter(video =>
            video.type.toLowerCase().includes(filter.toLowerCase())
        );

    return (
        <div className="w-full bg-black">
            <div className="w-full bg-black overflow-x-auto">
                {/* Filter Bar */}
                <div className="flex gap-2 justify-center py-4 border-b border-neutral-800 bg-black sticky top-0 z-10 overflow-x-auto whitespace-nowrap px-2 scrollbar-hide">
                    {VIDEO_TYPES.map(type => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition
                                ${filter === type
                                    ? "bg-neutral-800 text-white shadow"
                                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white"}
                            `}
                        >
                            <span className="truncate block max-w-[60px] sm:max-w-none">{type}</span>
                        </button>
                    ))}
                </div>
                {/* Video Cards */}
                <div className="flex flex-col items-center justify-center w-full mt-8">
                    {filteredVideos.map((video, idx) => (
                        <div
                            key={video.id}
                            className={`flex flex-col sm:flex-row items-center w-full max-w-md sm:max-w-lg lg:max-w-2xl min-h-[100px] sm:h-[100px] bg-black cursor-pointer transition
                                border-b border-neutral-800
                                hover:bg-neutral-900 hover:shadow-xl hover:scale-[1.01]
                                ${idx === filteredVideos.length - 1 ? "border-b-0" : ""}
                                sm:ml-0 mr-8
                            `}
                            onClick={() => handleClick(video)}
                        >
                            <img
                                src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                                alt={video.name}
                                className="w-full sm:w-[120px] h-[100px] sm:h-full object-cover bg-neutral-800 border-r border-neutral-800 rounded-t-xl sm:rounded-l-xl sm:rounded-t-none shadow"
                            />
                            <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center min-h-[80px] w-full">
                                <h4 className="mb-1 sm:mb-2 text-sm sm:text-base font-bold text-white tracking-wide truncate overflow-hidden w-full">
                                    {video.name}
                                </h4>
                                <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-neutral-300 truncate overflow-hidden w-full">
                                    <span className="font-semibold">{video.type}</span> &nbsp;•&nbsp; {new Date(video.published_at).toLocaleDateString()}
                                </p>
                                <p className="text-xs sm:text-sm text-neutral-400 truncate overflow-hidden w-full">
                                    Official: <span className={video.official ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                                        {video.official ? "Yes" : "No"}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                    {filteredVideos.length === 0 && (
                        <div className="text-white py-8 text-center w-full">
                            No videos found for "{filter}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Clips;

import { useSelector } from 'react-redux';
import { movieImageUrl } from '../utils/constants/ImgConst';
import useGalleryfetch from '../utils/Hooks/useGalleryfetch';
import useGallerytvfetch from '../utils/Hooks/useGallerytvfetch';

const TvGallery = ({ tvId }) => {
  const gallery = useSelector((state) => state.tvdetails.Gallery) || [];
  useGallerytvfetch(tvId);

  if (!gallery.length) {
    return (
      <div className="text-gray-400 text-center text-sm sm:text-base py-8">
        No images found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 sm:p-4">
      {gallery.map((img, idx) => (
        <div
          key={img.file_path + "_" + idx} // <-- ensures uniqueness
          className="rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-200 bg-gray-900"
        >
          <a
            href={movieImageUrl + img.file_path}
            target="_blank"
            rel="noopener noreferrer"
            title="View full image"
          >
            <img
              src={movieImageUrl + img.file_path}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-40 sm:h-56 object-cover"
              loading="lazy"
            />
          </a>
          <div className="px-2 py-1 text-xs text-gray-300 flex justify-between items-center">
            <span>
              {img.vote_average ? `★ ${img.vote_average}` : ""}
            </span>
            <span>
              {img.width}x{img.height}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TvGallery;

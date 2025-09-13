import { useEffect, useRef, useState } from "react"
import Header from "./Header"
import Aisearch from "../utils/Hooks/Aisearch";
import { useDispatch, useSelector} from "react-redux";
import {  setMovies, setMovieSearch } from "../utils/redux/GptSlice";
import { FiSearch } from "react-icons/fi"; // added
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useFetchMovieName from "../utils/Hooks/useFetchMovieName";
import SecondaryComponent from "./SecondaryComponent";
import Searchmoviecard from "./Searchmoviecard";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Search =  () => {
  const input = useRef();
  const dispatch = useDispatch();
  const Name=useSelector((state)=>state.gpt.Movies);
  const movieSearch=useSelector((state)=>state.gpt.MovieSearch);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const search = await Aisearch(input.current.value);
    
      if (search?.length) {
        dispatch(setMovies(search));
      
      }
    } finally {
      setLoading(false);
    }
  
    
  };

  const handleKeyDown = (e) => e.key === "Enter" && handleSearch();
  
  useEffect(() => {
    const data = async () => {
      const promises = Name.map(item => useFetchMovieName(item));
      const result = await Promise.all(promises);
      dispatch(setMovieSearch(result));
    };
    data();
  }, [Name]);
  

 
  



  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-x-hidden">
      <Header/>
      <div className="max-w-2xl mx-auto px-4 mt-8">
        <button
          className="flex items-center gap-2 cursor-pointer text-white px-3 py-2 rounded hover:bg-gray-800 mt-2 ml-0 md:-mt-3 md:text-lg"
          onClick={() => navigate("/browse")}
        >
          <FaChevronLeft />
          Back
        </button>
        <div className="relative mt-4">
          <input
            ref={input}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full bg-transparent border-b-2 border-gray-600 px-3 pr-10 py-2 focus:outline-none focus:border-white"
            placeholder="Type a movie name, recommendation, anything..."
          />
          {loading ? (
            <AiOutlineLoading3Quarters
              size={22}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 animate-spin"
              aria-label="Loading"
            />
          ) : (
            <FiSearch
              size={22}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
              onClick={handleSearch}
              role="button"
              aria-label="Search"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSearch()}
            />
          )}
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto md:flex md:justify-start lg:justify-center">
        {movieSearch && movieSearch.length > 0 ? (
          <div className="mt-8 space-y-6">
            <Searchmoviecard/>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Search

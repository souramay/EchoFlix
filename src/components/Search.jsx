import { useRef } from "react"
import Header from "./Header"
import Aisearch from "../utils/Hooks/Aisearch";
import { useDispatch} from "react-redux";
import { setMovies } from "../utils/redux/GptSlice";

const Search = () => {
  const input = useRef();
  const dispatch = useDispatch();


  const handleSearch = async () => {
    const search = await Aisearch(input.current.value);
    if (search?.length) {
      dispatch(setMovies(search));
    }
  };

  const handleKeyDown = (e) => e.key === "Enter" && handleSearch();

  return (
    <div className="w-full h-screen bg-black text-white">
      <Header/>
      <div className="max-w-2xl mx-auto px-4 mt-8">
        <input
          ref={input}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-b-2 border-gray-600 px-3 py-2 focus:outline-none focus:border-white"
          placeholder="Type a movie name, recommendation, anything..."
        />
        <div className="flex gap-2 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={handleSearch}>
            Search
          </button>
          
        </div>

       
      </div>
    </div>
  )
}

export default Search

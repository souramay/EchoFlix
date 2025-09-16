import options from "../constants/constantMovie";

const useFetchTvMovieName = async (MovieName) => {
  const url = `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(
    MovieName
  )}&include_adult=false&language=en-US&page=1`;
 
  const response = await fetch(url, options);
  const data = await response.json();
   
  return data;
  
};

export default useFetchTvMovieName;

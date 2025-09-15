const movieSections = [
  {
    title: "Upcoming",
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    key: "UpcomingMovies",
    action: "addUpcomingMovies",
  },
  {
    title: "Now Playing",
    url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    key: "NowplayingMovies",
    action: "addMovie",
  },
  {
    title: "Popular",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    key: "popularMovies",
    action: "addPopularMovies",
  },
  {
    title: "Top Rated",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    key: "TopratedMovies",
    action: "addTopratedMovies",
  },

  //  Adult Section (18+ movies)
  {
    title: "Adult (18+)",
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&sort_by=popularity.desc",
    key: "adultMovies",
    action: "addAdultMovies",
  },

  //  Genres Section (all available TMDB genres)
  {
    title: "Action",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=28&language=en-US&page=1",
    key: "actionMovies",
    action: "addActionMovies",
  },
  {
    title: "Adventure",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=12&language=en-US&page=1",
    key: "adventureMovies",
    action: "addAdventureMovies",
  },
  {
    title: "Animation",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1",
    key: "animationMovies",
    action: "addAnimationMovies",
  },
  {
    title: "Comedy",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=35&language=en-US&page=1",
    key: "comedyMovies",
    action: "addComedyMovies",
  },
  {
    title: "Crime",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=80&language=en-US&page=1",
    key: "crimeMovies",
    action: "addCrimeMovies",
  },
  {
    title: "Documentary",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=99&language=en-US&page=1",
    key: "documentaryMovies",
    action: "addDocumentaryMovies",
  },
  {
    title: "Drama",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=18&language=en-US&page=1",
    key: "dramaMovies",
    action: "addDramaMovies",
  },
  {
    title: "Family",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=10751&language=en-US&page=1",
    key: "familyMovies",
    action: "addFamilyMovies",
  },
  {
    title: "Fantasy",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=14&language=en-US&page=1",
    key: "fantasyMovies",
    action: "addFantasyMovies",
  },
  {
    title: "History",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=36&language=en-US&page=1",
    key: "historyMovies",
    action: "addHistoryMovies",
  },
  {
    title: "Horror",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=27&language=en-US&page=1",
    key: "horrorMovies",
    action: "addHorrorMovies",
  },
  {
    title: "Music",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=10402&language=en-US&page=1",
    key: "musicMovies",
    action: "addMusicMovies",
  },
  {
    title: "Mystery",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=9648&language=en-US&page=1",
    key: "mysteryMovies",
    action: "addMysteryMovies",
  },
  {
    title: "Romance",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=10749&language=en-US&page=1",
    key: "romanceMovies",
    action: "addRomanceMovies",
  },
  {
    title: "Science Fiction",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=878&language=en-US&page=1",
    key: "scifiMovies",
    action: "addScifiMovies",
  },
  {
    title: "TV Movie",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=10770&language=en-US&page=1",
    key: "tvMovies",
    action: "addTvMovies",
  },
  {
    title: "Thriller",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=53&language=en-US&page=1",
    key: "thrillerMovies",
    action: "addThrillerMovies",
  },
  {
    title: "War",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=10752&language=en-US&page=1",
    key: "warMovies",
    action: "addWarMovies",
  },
  {
    title: "Western",
    url: "https://api.themoviedb.org/3/discover/movie?with_genres=37&language=en-US&page=1",
    key: "westernMovies",
    action: "addWesternMovies",
  },
];

export default movieSections;

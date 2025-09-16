const tvSections = [
  // Main TV categories
  {
    title: "Airing Today",
    url: "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    key: "airingToday",
    action: "addAiringToday",
  },
  {
    title: "Currently Airing",
    url: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
    key: "onTheAir",
    action: "addOnTheAir",
  },
  {
    title: "Popular TV Shows",
    url: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    key: "popularTv",
    action: "addPopularTv",
  },
  {
    title: "Top Rated TV Shows",
    url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    key: "topRatedTv",
    action: "addTopRatedTv",
  },

  // Adult Section (18+)
  {
    title: "Adult (18+)",
    url: "https://api.themoviedb.org/3/discover/tv?include_adult=true&language=en-US&page=1",
    key: "adultTv",
    action: "addAdultTv",
  },

  // TMDb TV Genres
  {
    title: "Action & Adventure",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10759&language=en-US&page=1",
    key: "actionTv",
    action: "addActionTv",
  },
  {
    title: "Animation",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=16&language=en-US&page=1",
    key: "animationTv",
    action: "addAnimationTv",
  },
  {
    title: "Comedy",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=35&language=en-US&page=1",
    key: "comedyTv",
    action: "addComedyTv",
  },
  {
    title: "Crime",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=80&language=en-US&page=1",
    key: "crimeTv",
    action: "addCrimeTv",
  },
  {
    title: "Documentary",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=99&language=en-US&page=1",
    key: "documentaryTv",
    action: "addDocumentaryTv",
  },
  {
    title: "Drama",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=18&language=en-US&page=1",
    key: "dramaTv",
    action: "addDramaTv",
  },
  {
    title: "Family",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10751&language=en-US&page=1",
    key: "familyTv",
    action: "addFamilyTv",
  },
  {
    title: "Kids",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10762&language=en-US&page=1",
    key: "kidsTv",
    action: "addKidsTv",
  },
  {
    title: "Mystery",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=9648&language=en-US&page=1",
    key: "mysteryTv",
    action: "addMysteryTv",
  },
  {
    title: "News",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10763&language=en-US&page=1",
    key: "newsTv",
    action: "addNewsTv",
  },
  {
    title: "Reality",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10764&language=en-US&page=1",
    key: "realityTv",
    action: "addRealityTv",
  },
  {
    title: "Sci-Fi & Fantasy",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10765&language=en-US&page=1",
    key: "scifiFantasyTv",
    action: "addScifiFantasyTv",
  },
  {
    title: "Soap",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10766&language=en-US&page=1",
    key: "soapTv",
    action: "addSoapTv",
  },
  {
    title: "Talk",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10767&language=en-US&page=1",
    key: "talkTv",
    action: "addTalkTv",
  },
  {
    title: "War & Politics",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=10768&language=en-US&page=1",
    key: "warPoliticsTv",
    action: "addWarPoliticsTv",
  },
  {
    title: "Western",
    url: "https://api.themoviedb.org/3/discover/tv?with_genres=37&language=en-US&page=1",
    key: "westernTv",
    action: "addWesternTv",
  },
];

export default tvSections;

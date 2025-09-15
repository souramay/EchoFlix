import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    // Categories
    NowplayingMovies: [],
    popularMovies: [],
    TopratedMovies: [],
    UpcomingMovies: [],
    randomMovie: null,
    videoId: null,

    // 18+ Category
    adultMovies: [],

    // Genres
    actionMovies: [],
    adventureMovies: [],
    animationMovies: [],
    comedyMovies: [],
    crimeMovies: [],
    documentaryMovies: [],
    dramaMovies: [],
    familyMovies: [],
    fantasyMovies: [],
    historyMovies: [],
    horrorMovies: [],
    musicMovies: [],
    mysteryMovies: [],
    romanceMovies: [],
    scifiMovies: [],
    tvMovies: [],
    thrillerMovies: [],
    warMovies: [],
    westernMovies: [],
  },
  reducers: {
    // Categories
    addMovie: (state, action) => {
      state.NowplayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.TopratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    setRandomMovie: (state, action) => {
      state.randomMovie = action.payload;
    },
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },

    // 18+ Category
    addAdultMovies: (state, action) => {
      state.adultMovies = action.payload;
    },

    // Genres
    addActionMovies: (state, action) => {
      state.actionMovies = action.payload;
    },
    addAdventureMovies: (state, action) => {
      state.adventureMovies = action.payload;
    },
    addAnimationMovies: (state, action) => {
      state.animationMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    addCrimeMovies: (state, action) => {
      state.crimeMovies = action.payload;
    },
    addDocumentaryMovies: (state, action) => {
      state.documentaryMovies = action.payload;
    },
    addDramaMovies: (state, action) => {
      state.dramaMovies = action.payload;
    },
    addFamilyMovies: (state, action) => {
      state.familyMovies = action.payload;
    },
    addFantasyMovies: (state, action) => {
      state.fantasyMovies = action.payload;
    },
    addHistoryMovies: (state, action) => {
      state.historyMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addMusicMovies: (state, action) => {
      state.musicMovies = action.payload;
    },
    addMysteryMovies: (state, action) => {
      state.mysteryMovies = action.payload;
    },
    addRomanceMovies: (state, action) => {
      state.romanceMovies = action.payload;
    },
    addScifiMovies: (state, action) => {
      state.scifiMovies = action.payload;
    },
    addTvMovies: (state, action) => {
      state.tvMovies = action.payload;
    },
    addThrillerMovies: (state, action) => {
      state.thrillerMovies = action.payload;
    },
    addWarMovies: (state, action) => {
      state.warMovies = action.payload;
    },
    addWesternMovies: (state, action) => {
      state.westernMovies = action.payload;
    },
  },
});

export const {
  // Categories
  addMovie,
  addPopularMovies,
  addTopratedMovies,
  addUpcomingMovies,
  setRandomMovie,
  setVideoId,

  // 18+ Category
  addAdultMovies,

  // Genres
  addActionMovies,
  addAdventureMovies,
  addAnimationMovies,
  addComedyMovies,
  addCrimeMovies,
  addDocumentaryMovies,
  addDramaMovies,
  addFamilyMovies,
  addFantasyMovies,
  addHistoryMovies,
  addHorrorMovies,
  addMusicMovies,
  addMysteryMovies,
  addRomanceMovies,
  addScifiMovies,
  addTvMovies,
  addThrillerMovies,
  addWarMovies,
  addWesternMovies,
} = MovieSlice.actions;

export default MovieSlice.reducer;

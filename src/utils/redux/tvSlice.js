import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airingToday: [],
  onTheAir: [],
  popularTv: [],
  topRatedTv: [],
  adultTv: [],
  actionTv: [],
  animationTv: [],
  comedyTv: [],
  crimeTv: [],
  documentaryTv: [],
  dramaTv: [],
  familyTv: [],
  kidsTv: [],
  mysteryTv: [],
  newsTv: [],
  realityTv: [],
  scifiFantasyTv: [],
  soapTv: [],
  talkTv: [],
  warPoliticsTv: [],
  westernTv: [],
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    addAiringToday(state, action) {
      state.airingToday = action.payload;
    },
    addOnTheAir(state, action) {
      state.onTheAir = action.payload;
    },
    addPopularTv(state, action) {
      state.popularTv = action.payload;
    },
    addTopRatedTv(state, action) {
      state.topRatedTv = action.payload;
    },
    addAdultTv(state, action) {
      state.adultTv = action.payload;
    },
    addActionTv(state, action) {
      state.actionTv = action.payload;
    },
    addAnimationTv(state, action) {
      state.animationTv = action.payload;
    },
    addComedyTv(state, action) {
      state.comedyTv = action.payload;
    },
    addCrimeTv(state, action) {
      state.crimeTv = action.payload;
    },
    addDocumentaryTv(state, action) {
      state.documentaryTv = action.payload;
    },
    addDramaTv(state, action) {
      state.dramaTv = action.payload;
    },
    addFamilyTv(state, action) {
      state.familyTv = action.payload;
    },
    addKidsTv(state, action) {
      state.kidsTv = action.payload;
    },
    addMysteryTv(state, action) {
      state.mysteryTv = action.payload;
    },
    addNewsTv(state, action) {
      state.newsTv = action.payload;
    },
    addRealityTv(state, action) {
      state.realityTv = action.payload;
    },
    addScifiFantasyTv(state, action) {
      state.scifiFantasyTv = action.payload;
    },
    addSoapTv(state, action) {
      state.soapTv = action.payload;
    },
    addTalkTv(state, action) {
      state.talkTv = action.payload;
    },
    addWarPoliticsTv(state, action) {
      state.warPoliticsTv = action.payload;
    },
    addWesternTv(state, action) {
      state.westernTv = action.payload;
    },
    resettv(state) {
      state.popularTv = [];
    },
      
  },
});

export const {
  addAiringToday,
  addOnTheAir,
  addPopularTv,
  addTopRatedTv,
  addAdultTv,
  addActionTv,
  addAnimationTv,
  addComedyTv,
  addCrimeTv,
  addDocumentaryTv,
  addDramaTv,
  addFamilyTv,
  addKidsTv,
  addMysteryTv,
  addNewsTv,
  addRealityTv,
  addScifiFantasyTv,
  addSoapTv,
  addTalkTv,
  addWarPoliticsTv,
  addWesternTv,
  resettv,
} = tvSlice.actions;

export default tvSlice.reducer;

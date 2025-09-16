import { createSlice } from "@reduxjs/toolkit";

export const DetailTvSlice = createSlice({
    name: "tvdetails",
    initialState: {
        detail: null,
        video: null,
        trailer: null,
        videoplay: null,
        videodetails: [],
        caste: null,
        Reviews: null,
        Gallery: null,
        Similar: null,
        Recommended: null,
        TvvideoId: null,
        TVSeason: null,
        
    },
    reducers: {
        setTvDetail: (state, action) => {
            state.detail = action.payload;
        },
        setTvVideo: (state, action) => {
            state.video = action.payload;
        },
        setTvTrailer: (state, action) => {
            state.trailer = action.payload;
        },
        setTvVideoplay: (state, action) => {
            state.videoplay = action.payload;
        },
        setTvVideodetails: (state, action) => {
            state.videodetails = action.payload;
        },
        setTvCaste: (state, action) => {
            state.caste = action.payload;
        },
        setTvReviews: (state, action) => {
            state.Reviews = action.payload;
        },
        setTvGallery: (state, action) => {
            state.Gallery = action.payload;
        },
        setTvSimilar: (state, action) => {
            state.Similar = action.payload;
        },
        setTvRecommended: (state, action) => {
            state.Recommended = action.payload;
        },
        resetTvDetail: (state) => {
            state.detail = {};
            state.trailer = [];
            state.videoplay = null;
            state.videodetails = [];
            state.caste = null;
            state.Reviews = null;
            state.Gallery = null;
            state.Similar = null;
            state.Recommended = null;
            state.TvvideoId = null;
        },
        setTvVideoId: (state, action) => {
            state.TvvideoId = action.payload;
        },
        resetTvvideoId: (state) => {
            state.TvvideoId = null;
        },
        setTvSeason: (state, action) => {
            state.TVSeason = action.payload;
        }
    }
});

export const {
    setTvDetail,
    setTvVideo,
    setTvTrailer,
    setTvVideoplay,
    setTvVideodetails,
    setTvCaste,
    setTvReviews,
    setTvGallery,
    setTvSimilar,
    setTvRecommended,
    resetTvDetail,
    setTvVideoId,
    resetTvvideoId,
    setTvSeason
} = DetailTvSlice.actions;

export default DetailTvSlice.reducer;
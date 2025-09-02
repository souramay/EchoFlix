import { createSlice } from "@reduxjs/toolkit";




export const UserSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        }
    }
})


export const {addUser,removeUser}=UserSlice.actions;

export default UserSlice.reducer;
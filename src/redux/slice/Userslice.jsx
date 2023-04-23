import { createSlice } from "@reduxjs/toolkit";


export const Userslice=createSlice({
    name:'user',
    initialState:{
        users:[]
    },
    reducers:{
        addUsers(state,action){
            state.users=action.payload;
        }
    }
})
export const {addUsers}=Userslice.actions;
export default Userslice.reducer;
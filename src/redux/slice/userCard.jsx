import { createSlice } from "@reduxjs/toolkit";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const Usercardslice=createSlice({
    name:'usercard',
    initialState:{
        usercard:{
            title:'USERS',
            growth:2,
            totle:0,
            see:'user',
            Color:'red',
            icon:<PersonOutlineIcon/>,
            to:'user'
        }
    },
    reducers:{
        updateUser(state,action){
            state.usercard.totle=action.payload;
        },
        updateUserGrowth(state,action){
            state.usercard.growth=action.payload;
        }
    }
})
export const {updateUser,updateUserGrowth}=Usercardslice.actions;
export default Usercardslice.reducer;
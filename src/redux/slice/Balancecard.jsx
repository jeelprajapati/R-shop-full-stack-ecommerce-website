import { createSlice } from "@reduxjs/toolkit";
import AtmOutlinedIcon from '@mui/icons-material/AtmOutlined';

export const Balancecardslice=createSlice({
    name:'balancecard',
    initialState:{
        balancecard:{
            title:'MY BALANCE',
            growth:2,
            totle:7000,
            see:'detail',
            Color:'pink',
            icon:<AtmOutlinedIcon/>,
            to:'user'
        }
    },
    reducers:{
        updateBalance(state,action){
            state.balancecard.totle=action.payload;
        },
        updateBalanceGrowth(state,action){
            state.balancecard.growth=action.payload;
        }
    }
})
export const {updateTotle,updateGrowth}=Balancecardslice.actions;
export default Balancecardslice.reducer;
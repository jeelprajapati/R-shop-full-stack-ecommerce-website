import { createSlice } from "@reduxjs/toolkit";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

export const Earncardslice=createSlice({
    name:'earncard',
    initialState:{
        earncard:{
            title:'EARNING',
            growth:50,
            totle:50000,
            see:'user',
            Color:'yellow',
            icon:<CurrencyRupeeOutlinedIcon/>,
            to:'user'
        }
    },
    reducers:{
        updateEarn(state,action){
            state.earncard.totle=action.payload;
        },
        updateEarnGrowth(state,action){
            state.earncard.growth=action.payload;
        }
    }
})
export const {updateEarn,updateEarnGrowth}=Earncardslice.actions;
export default Earncardslice.reducer;
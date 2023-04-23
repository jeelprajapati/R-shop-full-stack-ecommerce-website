import { createSlice } from "@reduxjs/toolkit";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Ordercardslice=createSlice({
    name:'ordercard',
    initialState:{
        ordercard:{
            title:'ORDERS',
            growth:2,
            totle:80,
            see:'orders',
            Color:'green',
            icon:<ShoppingCartOutlinedIcon/>,
            to:'order'
        }
    },
    reducers:{
        updateOrder(state,action){
            state.ordercard.totle=action.payload;
        },
        updateOrderGrowth(state,action){
            state.ordercard.growth=action.payload;
        }
    }
})
export const {updateOrder,updateOrderGrowth}=Ordercardslice.actions;
export default Ordercardslice.reducer;
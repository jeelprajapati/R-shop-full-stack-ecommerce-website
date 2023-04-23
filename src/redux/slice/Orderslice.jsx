import { createSlice } from "@reduxjs/toolkit";


export const Orderslice=createSlice({
    name:'orders',
    initialState:{
        orders:[]
    },
    reducers:{
        addorder(state,action){
            state.orders=action.payload;
        }
    }
})
export const {addorder}=Orderslice.actions;
export default Orderslice.reducer;
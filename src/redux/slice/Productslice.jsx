import { createSlice } from "@reduxjs/toolkit";


export const Productslice=createSlice({
    name:'products',
    initialState:{
        products:[]
    },
    reducers:{
        addproduct(state,action){
            state.products=action.payload;
        }
    }
})
export const {addproduct}=Productslice.actions;
export default Productslice.reducer;
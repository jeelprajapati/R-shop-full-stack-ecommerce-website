import { createSlice } from "@reduxjs/toolkit";


export const Cartslice=createSlice({
    name:'cart',
    initialState:{
        products:[],
        total:0,
    },
    reducers:{
        addproduct(state,action){
            state.products.push(action.payload);
            state.total+=action.payload.price;
        },
        removeproduct(state,action){
            state.quantity-=1;
            state.products.filter((e)=>e.id!==action.payload);    
        }
    }
})
export const {addproduct,removeproduct}=Cartslice.actions;
export default Cartslice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const Filterslice=createSlice({
    name:'filter',
    initialState:{
        category:'',
        subcat:'',
        price:2000,
        sort:0,
    },
    reducers:{
        setCategory(state,action){
            state.category=action.payload.cat;
        },
        setSubcat(state,action){
            state.subcat=action.payload.subcat;
        },
        setPrice(state,action){
            state.price=action.payload.price;
        },
        setSort(state,action){
            state.sort=action.payload.sort;
        }
    }
})
export const {setSubcat,setPrice,setSort,setCategory}=Filterslice.actions;
export default Filterslice.reducer;
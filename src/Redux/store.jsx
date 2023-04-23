import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./slice/Cartslice";
import Filterslice from "./slice/Filterslice";

export const store=configureStore({
    reducer:{
        cart:Cartslice,
        filters:Filterslice
    },
})

import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./slice/Productslice";
import Userslice from "./slice/Userslice";
import Orderslice from "./slice/Orderslice";
import Usercardslice  from "./slice/userCard";
import Ordercardslice from "./slice/Ordercard";
import Earncardslice from "./slice/Earncard";
import Balancecardslice from "./slice/Balancecard"

export const store=configureStore({
    reducer:{
        products:Productslice,
        user:Userslice,
        order:Orderslice,
        usercard:Usercardslice,
        ordercard:Ordercardslice,
        earncard:Earncardslice,
        balancecard:Balancecardslice
    },
})
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice, //name of the slice : object name which we have exportted
    }


});

export default store;
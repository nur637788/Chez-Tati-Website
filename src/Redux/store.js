import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/CartSlice"
import favoriteReducer from "../Redux/favoriteSlice";
import authReducer from '../Redux/authSlice'
import profileReducer from '../Redux/profileSlice'



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoriteReducer,
        auth: authReducer,
        profile: profileReducer,

    },
});

// SAVE to localStorage whenever state changes
store.subscribe(() => {
    localStorage.setItem("cartState", JSON.stringify(store.getState().cart));
});

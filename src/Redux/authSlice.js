import { createSlice } from "@reduxjs/toolkit";

const savedAuth = JSON.parse(localStorage.getItem("auth"));

const initialState = {
    isLoggedIn: savedAuth?.isLoggedIn || false,
    user: savedAuth?.user || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;

            // SAVE TO LOCAL STORAGE
            localStorage.setItem("auth", JSON.stringify(state));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;

            // REMOVE FROM LOCAL STORAGE
            localStorage.removeItem("auth");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

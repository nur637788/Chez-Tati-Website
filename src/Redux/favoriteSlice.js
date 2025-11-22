import { createSlice } from "@reduxjs/toolkit";

// Load from LocalStorage
const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        items: savedFavorites,   // Load saved favorites
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const exists = state.items.find(item => item.id === action.payload.id);

            if (exists) {
                // Remove
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                // Add
                state.items.push(action.payload);
            }

            // Save to LocalStorage
            localStorage.setItem("favorites", JSON.stringify(state.items));
        },

        clearFavorites: (state) => {
            state.items = [];
            localStorage.removeItem("favorites");
        }
    },
});

export const { toggleFavorite, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;

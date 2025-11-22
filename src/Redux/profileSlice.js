import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        name: " ",
        email: " ",
        phone: " ",
        bio: " ",
        image: 'https://tse2.mm.bing.net/th/id/OIP.ydDEFtiADgNw6f0SKaJZugHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.6&o=7&rm=3',
    },
    reducers: {
        updateProfile: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;

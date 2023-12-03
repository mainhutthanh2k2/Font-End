import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    accessToken: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload;
        },
        setToken: (state, action) => {
            state.accessToken = action.payload;
        },
    },
});

export const { login, setToken } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {
        value: false
    },
    reducers: {
        changeMode: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
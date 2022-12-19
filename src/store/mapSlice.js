import { createSlice } from "@reduxjs/toolkit";

const initialState = { map: null };

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        addMapLocation: (state, action) => {
            state.map = action.payload
        }
    }
});

export const { addMapLocation } = mapSlice.actions;
export default mapSlice.reducer;
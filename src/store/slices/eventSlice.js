import { createSlice } from "@reduxjs/toolkit";

const initialState = { selected: {}, events: [] };

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    fillEvents: (state, action) => {
      state.events = action.payload;
    },
    selectEvent: (state, action) => {
      state.selected = action.payload;
    },
    removeEvent: (state) => {
      state.selected = {};
    },
  },
});

export const { fillEvents, selectEvent, removeEvent } = eventSlice.actions;

export default eventSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { selected: {} };

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    selectTask: (state, action) => {
      state.selected = action.payload;
    },
    removeTask: (state) => {
      state.selected = {};
    },
  },
});

export const { selectTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;

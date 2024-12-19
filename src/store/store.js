import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";
import eventSlice from "./slices/eventSlice";

export default configureStore({
  reducer: {
    event: eventSlice,
    task: taskSlice,
  },
});

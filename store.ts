import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseSlice";
import skillReducer from "./slices/skillSlice";

export const store = configureStore({
  reducer: {
    skill: skillReducer,
    course: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

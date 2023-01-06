import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "./slices/skillSlice";

export const store = configureStore({
  reducer: {
    skill: skillReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

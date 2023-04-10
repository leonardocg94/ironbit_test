import { configureStore } from "@reduxjs/toolkit";
import { nthTermSlice } from "./nthTermSlice";
import { rickAndMortySlice } from "./rickAndMortySlice";

export const store = configureStore({
  reducer: {
    [nthTermSlice.name]: nthTermSlice.reducer,
    [rickAndMortySlice.name]: rickAndMortySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
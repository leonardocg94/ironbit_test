import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RickAndMortyState } from "../types/store/rickAndMortySliceTypes";

const initialState: RickAndMortyState = {
  searchValue: "",
  results: [],
  loading: false,
};

export const rickAndMortySlice = createSlice({
  name: "rickAndMorty",
  initialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    setResults(state, { payload }: PayloadAction<any[]>) {
      state.results = payload;
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
  },
});

export const { setSearchValue, setResults, setLoading } = rickAndMortySlice.actions;

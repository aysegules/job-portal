import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFilter: {
    title: "",
    location: "",
  },
  isSearched: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },

    updateSearchFilter: (state, action) => {
      state.searchFilter = {
        ...state.searchFilter,
        ...action.payload,
      };
    },

    setIsSearched: (state, action) => {
      state.isSearched = action.payload;
    },
  },
});

export const { setSearchFilter, setIsSearched, updateSearchFilter } =
  appSlice.actions;

export default appSlice.reducer;

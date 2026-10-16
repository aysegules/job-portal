import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFilter: {
    title: "",
    location: "",
  },
  isSearched: false,
  showLogin: false,
  role: "user",
  token: "",
  resume: null,
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

    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },

    setRole: (state, action) => {
      state.role = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setResume: (state, action) => {
      state.resume = action.payload;
    },
  },
});

export const {
  setSearchFilter,
  setIsSearched,
  updateSearchFilter,
  setShowLogin,
  setRole,
  setToken,
  setResume,
} = appSlice.actions;

export default appSlice.reducer;

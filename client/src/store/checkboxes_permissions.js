import { createSlice } from "@reduxjs/toolkit";

const initialCheckboxesState = {
  viewSub: false,
  createSub: false,
  deleteSub: false,
  updateSub: false,
  viewMovies: false,
  createMovies: false,
  deleteMovies: false,
  updateMovies: false,
};
const checkboxesSlice = createSlice({
  name: "checkboxes",
  initialState: initialCheckboxesState,
  reducers: {
    changeViewSub(state, action) {
      state.viewSub = action.payload;
    },
    changeCreateSub(state, action) {
      state.createSub = action.payload;
    },
    changeDeleteSub(state, action) {
      state.deleteSub = action.payload;
    },
    changeUpdateSub(state, action) {
      state.updateSub = action.payload;
    },
    changeViewMovies(state, action) {
      state.viewMovies = action.payload;
    },
    changeCreateMovies(state, action) {
      state.createMovies = action.payload;
    },
    changeDeleteMovies(state, action) {
      state.deleteMovies = action.payload;
    },
    changeUpdateMovies(state, action) {
      state.updateMovies = action.payload;
    },
  },
});

export default checkboxesSlice.reducer;
export const checkboxesActions = checkboxesSlice.actions;

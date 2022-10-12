import { createSlice } from "@reduxjs/toolkit";

const initialMovieIdState = { id: "" };
const movieIdSlice = createSlice({
  name: "movieId",
  initialState: initialMovieIdState,
  reducers: {
    editId(state, action) {
      state.id = action.payload;
    },
  },
});

export default movieIdSlice.reducer;
export const movieIdActions = movieIdSlice.actions;

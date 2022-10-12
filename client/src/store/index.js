import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";
import moviesReducer from "./movies";

const store = configureStore({
  reducer: {
    members: membersReducer,
    movies: moviesReducer,
  },
});

export default store;

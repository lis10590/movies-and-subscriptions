import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";
import moviesReducer from "./movies";
import movieIdReducer from "./movieId";

const store = configureStore({
  reducer: {
    members: membersReducer,
    movies: moviesReducer,
    movieId: movieIdReducer,
  },
});

export default store;

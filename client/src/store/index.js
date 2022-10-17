import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";
import moviesReducer from "./movies";
import movieIdReducer from "./movieId";
import memberIdReducer from "./memberId";
import usersFromFileReducer from "./usersFromFile";

const store = configureStore({
  reducer: {
    members: membersReducer,
    movies: moviesReducer,
    movieId: movieIdReducer,
    memberId: memberIdReducer,
    usersFromFile: usersFromFileReducer,
  },
});

export default store;

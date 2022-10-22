import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members";
import moviesReducer from "./movies";
import movieIdReducer from "./movieId";
import memberIdReducer from "./memberId";
import usersFromFileReducer from "./usersFromFile";
import permissionsReducer from "./permissions";
import userIdReducer from "./userId";
import usersReducer from "./users";
import checkboxesReducer from "./checkboxes_permissions";
import editMembersReducer from "./membersReducer";
import editMoviesReducer from "./moviesReducer";
import editUsersReducer from "./usersReducer";

const store = configureStore({
  reducer: {
    members: membersReducer,
    movies: moviesReducer,
    movieId: movieIdReducer,
    memberId: memberIdReducer,
    usersFromFile: usersFromFileReducer,
    permissions: permissionsReducer,
    userId: userIdReducer,
    users: usersReducer,
    checkboxes: checkboxesReducer,
    editMember: editMembersReducer,
    editMovie: editMoviesReducer,
    editUser: editUsersReducer,
  },
});

export default store;

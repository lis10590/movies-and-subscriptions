const editMoviesReducer = (
  state = { name: "", genres: [], image: "", premiered: "" },
  action
) => {
  switch (action.type) {
    case "onChangeMovieName":
      return { ...state, name: action.payload };
    case "onChangeGenres":
      return { ...state, genres: action.payload };
    case "onChangeImage":
      return { ...state, image: action.payload };
    case "onChangePremiered":
      return { ...state, premiered: action.payload };
    default:
      return state;
  }
};

export default editMoviesReducer;
export const selectEditMovie = (state) => state.editMovie;

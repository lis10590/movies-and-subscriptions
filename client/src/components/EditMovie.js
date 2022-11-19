import { useEffect } from "react";
import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMovies from "./InputMovies";
import { useSelector, useDispatch } from "react-redux";
import {
  getMovie,
  selectOneMovie,
  getAllMovies,
  movieUpdate,
} from "../store/movies";
import { useNavigate } from "react-router-dom";
import { selectEditMovie } from "../store/moviesReducer";

const EditMovie = () => {
  const movieId = useSelector((state) => state.movieId.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editMovie = useSelector(selectEditMovie);

  useEffect(() => {
    dispatch(getMovie(movieId));
    dispatch(getAllMovies());
  }, [dispatch, movieId]);
  const movie = useSelector(selectOneMovie);

  const onChangeMovieName = (e) => {
    dispatch({ type: "onChangeMovieName", payload: e.target.value });
  };

  const onChangeGenres = (e) => {
    dispatch({ type: "onChangeGenres", payload: e.target.value });
  };

  const onChangeImage = (e) => {
    dispatch({ type: "onChangeImage", payload: e.target.value });
  };

  const onChangePremiered = (e) => {
    dispatch({ type: "onChangePremiered", payload: e.target.value });
  };

  const onCancelClick = () => {
    navigate("/allmovies");
  };

  const onUpdateMovie = () => {
    const obj = {
      ...editMovie,
      id: movieId,
    };

    dispatch(movieUpdate(obj));
    navigate("/allmovies");
  };

  return (
    <Box
      style={{
        maxWidth: "25rem",
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Title>Edit Movie</Title>
      <InputMovies
        nameValue={editMovie.name}
        plchName={movie.name}
        plchGenres={
          Object.keys(movie).length !== 0
            ? movie.genres.map((genre) => {
                return genre;
              })
            : null
        }
        plchImg={Object.keys(movie).length !== 0 ? movie.image.medium : null}
        plchpremiered={movie.premiered}
        onChangeName={onChangeMovieName}
        genresValue={editMovie.genres}
        onChangeGenres={onChangeGenres}
        imgurlValue={editMovie.image}
        onChangeImg={onChangeImage}
        premieredValue={editMovie.premiered}
        onChangePremiered={onChangePremiered}
      />
      <Buttons className="is-flex is-justify-content-center">
        <Button onClick={onUpdateMovie}>Update</Button>
        <Button onClick={onCancelClick}>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default EditMovie;

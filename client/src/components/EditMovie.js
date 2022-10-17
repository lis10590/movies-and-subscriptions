import { useState, useEffect, useRef } from "react";
import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMovies from "./InputMovies";
import { useSelector, useDispatch } from "react-redux";
import { getMovie, selectOneMovie, onChangeInputValue } from "../store/movies";

const EditMovie = (props) => {
  const movieId = useSelector((state) => state.movieId.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(movieId));
  }, [dispatch, movieId]);
  const movie = useSelector(selectOneMovie);

  const onChangeInput = (e) => {
    // dispatch(onChangeInputValue(e.target.value));
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
        nameValue={movie.name}
        onChangeName={onChangeInput}
        genresValue={
          Object.keys(movie).length !== 0
            ? movie.genres.map((genre) => {
                return genre;
              })
            : null
        }
        onChangeGenres={onChangeInput}
        imgurlValue={
          Object.keys(movie).length !== 0 ? movie.image.medium : null
        }
        onChangeImg={onChangeInput}
        premieredValue={movie.premiered}
        onChangePremiered={onChangeInput}
      />
      <Buttons className="is-flex is-justify-content-center">
        <Button>Update</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default EditMovie;

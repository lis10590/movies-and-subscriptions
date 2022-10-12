import { useState, useEffect } from "react";
import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMovies from "./InputMovies";
import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../store/movies";

const EditMovie = () => {
  const movieId = useSelector((state) => state.movieId.id);
  const dispatch = useDispatch();
  const movie = dispatch(getMovie(movieId));
  // useEffect(() => {
  //   const movie = dispatch(getMovie(movieId));
  // }, [dispatch]);

  console.log(movie);

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
      <InputMovies />
      <Buttons className="is-flex is-justify-content-center">
        <Button>Update</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default EditMovie;

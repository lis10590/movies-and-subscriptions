import { useState, useEffect } from "react";
import {
  Card,
  Title,
  Buttons,
  Button,
  Field,
  Input,
} from "react-bulma-companion";
import EditMovie from "./EditMovie";
import { getAllMovies, selectAllMovies } from "../store/movies";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieIdActions } from "../store/movieId";

const AllMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(selectAllMovies);
  const movieId = useSelector((state) => state.movieId.id);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const onEditClickHandler = (movie) => {
    console.log(movie);
    dispatch(movieIdActions.editId(movie));
    console.log(movieId);
    navigate("/editmovie");
  };

  return (
    <div>
      <Field>
        Find Movie
        <Input
          name="findMovie"
          type="text"
          style={{ maxWidth: "20rem" }}
          className="ml-2 mr-2"
        />
        <Button>Find</Button>
      </Field>
      <Title>All Movies</Title>
      {movies.map((movie) => {
        return (
          <Card
            style={{
              maxWidth: "25rem",
              marginBottom: "2rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            key={movie._id}
          >
            <Title size="5">
              {movie.name},{movie.premiered.split("-")[0]}
            </Title>
            <h3>
              Genres:
              {movie.genres.map((genre, index) => {
                return (
                  <span key={index}>
                    "{genre}"{index === movie.genres.length - 1 ? null : ","}
                  </span>
                );
              })}
            </h3>
            <img alt="movie" src={movie.image.medium} />
            <Buttons>
              <Button onClick={() => onEditClickHandler(movie._id)}>
                Edit
              </Button>
              <Button>Delete</Button>
            </Buttons>
          </Card>
        );
      })}
      {true ? null : <EditMovie />}
    </div>
  );
};

export default AllMovies;

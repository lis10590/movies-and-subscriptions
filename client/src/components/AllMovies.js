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

const AllMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const [movieDetails, setMovieDetails] = useState({});

  const onEditClickHandler = (movie) => {
    // const obj = {
    //   _id: movie._id,
    //   name: movie.name,
    //   genres: movie.genres,
    //   image: movie.image,
    //   premiered: movie.premiered,
    // };

    setMovieDetails({
      _id: movie._id,
      name: movie.name,
      genres: movie.genres,
      image: movie.image,
      premiered: movie.premiered,
    });
    console.log(movieDetails);
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
                  <span>
                    "{genre}"{index === movie.genres.length - 1 ? null : ","}
                  </span>
                );
              })}
            </h3>
            <img alt="movie" src={movie.image.medium} />
            <Buttons>
              <Button onClick={() => onEditClickHandler(movie)}>Edit</Button>
              <Button>Delete</Button>
            </Buttons>
          </Card>
        );
      })}
      {true ? null : <EditMovie movieDetails={movieDetails} />}
    </div>
  );
};

export default AllMovies;

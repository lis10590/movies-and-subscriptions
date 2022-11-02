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
import { getList, selectAllWatchList } from "../store/watchList";

const AllMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getList());
  }, [dispatch]);

  const movies = useSelector(selectAllMovies);
  const watchList = useSelector(selectAllWatchList);
  const [queryInput, setQueryInput] = useState("");

  console.log(watchList);

  const onEditClickHandler = (id) => {
    dispatch(movieIdActions.editId(id));
    let chosenMovie = {};
    for (const movie of movies) {
      if (movie._id === id) {
        chosenMovie = movie;
      }
    }

    dispatch({ type: "onChangeMovieName", payload: chosenMovie.name });
    dispatch({ type: "onChangeGenres", payload: chosenMovie.genres });
    dispatch({ type: "onChangeImage", payload: chosenMovie.image.medium });
    dispatch({ type: "onChangePremiered", payload: chosenMovie.premiered });

    navigate("/editmovie");
  };

  const search = (e) => {
    setQueryInput(e.target.value);
  };

  return (
    <div>
      <Field>
        Find Movie
        <Input
          name="findMovie"
          type="text"
          onChange={search}
          style={{ maxWidth: "20rem" }}
          className="ml-2 mr-2"
        />
        <Button>Find</Button>
      </Field>
      <Title>All Movies</Title>
      {movies
        .filter((item) => item.name.toLowerCase().includes(queryInput))
        .map((movie) => {
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
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    maxWidth: "40%",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                  alt="movie"
                  src={movie.image.medium}
                />
                <Card>
                  <Title size="6">Subscriptions Watched</Title>
                </Card>
              </div>
              <Buttons className="is-justify-content-center mt-4">
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

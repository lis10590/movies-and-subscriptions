import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMovies from "./InputMovies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMovies, movieAddition } from "../store/movies";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarMovies from "./NavbarMovies";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const permissions = useSelector((state) => state.movies.moviesPermissions);
  const [movie, setMovie] = useState({
    name: "",
    genres: [],
    image: "",
    premiered: "",
  });

  const createMoviesCheck = () => {
    if (Object.keys(permissions).length !== 0) {
      for (const property in permissions) {
        if (property === "Create Movies" && permissions[property] === false) {
          return false;
        } else if (
          property === "Create Movies" &&
          permissions[property] === true
        ) {
          return true;
        }
      }
    }
  };

  const onChangeMovie = (e) => {
    const { name, value } = e.target;
    setMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChangeGenres = (e) => {
    const genres = e.target.value;
    const genresArr = genres.split(",");
    setMovie((prevState) => ({
      ...prevState,
      genres: genresArr,
    }));
    console.log(movie.genres);
  };

  const onSaveMovie = () => {
    dispatch(movieAddition(movie));
    navigate("/allmovies");
  };

  const onCancel = () => {
    navigate("/allmovies");
  };

  return (
    <div>
      {location.pathname === "/addmovie" ? <NavbarMovies /> : null}
      {createMoviesCheck() === true ? (
        <div>
          <Box
            style={{
              maxWidth: "25rem",
              marginTop: "2rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Title>Add Movie</Title>
            <InputMovies
              nameValue={movie.name}
              onChangeName={onChangeMovie}
              genresValue={movie.genres}
              onChangeGenres={onChangeGenres}
              imgurlValue={movie.image}
              onChangeImg={onChangeMovie}
              premieredValue={movie.premiered}
              onChangePremiered={onChangeMovie}
            />
            <Buttons className="is-flex is-justify-content-center">
              <Button onClick={onSaveMovie}>Save</Button>
              <Button onClick={onCancel}>Cancel</Button>
            </Buttons>
          </Box>
        </div>
      ) : (
        <div>You are not Authorized!</div>
      )}
    </div>
  );
};

export default AddMovie;

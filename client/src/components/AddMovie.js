import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMovies from "./InputMovies";
import { useDispatch } from "react-redux";
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

  const [movie, setMovie] = useState({
    name: "",
    genres: [],
    image: "",
    premiered: "",
  });

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
    navigate("/allMovies");
  };

  const onCancel = () => {
    navigate("/allMovies");
  };

  return (
    <div>
      {location.pathname === "/addmovie" ? <NavbarMovies /> : null}
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
  );
};

export default AddMovie;

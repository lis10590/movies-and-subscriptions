import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMovies from "./InputMovies";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllMovies } from "../store/movies";
import NavbarMovies from "./NavbarMovies";
const AddMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  return (
    <div>
      {/* <NavbarMovies /> */}
      <Box
        style={{
          maxWidth: "25rem",
          marginTop: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Title>Add Movie</Title>
        <InputMovies />
        <Buttons className="is-flex is-justify-content-center">
          <Button>Save</Button>
          <Button>Cancel</Button>
        </Buttons>
      </Box>
    </div>
  );
};

export default AddMovie;

import { useState } from "react";
import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMovies from "./InputMovies";

const EditMovie = (props) => {
  // const [movie, setMovie] = useState(props.movieDetails)
  console.log(props.movieDetails);

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

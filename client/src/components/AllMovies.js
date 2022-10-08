import { useState } from "react";
import { Card, Title, Buttons, Button } from "react-bulma-companion";
import EditMovie from "./EditMovie";

const AllMovies = () => {
  const movies = [
    {
      id: 1,
      name: "Under the Dome",
      geners: ["Drama", "Science-Fiction", "Thriller"],
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
      },
    },

    {
      id: 2,
      name: "Person of Interest",
      geners: ["Action", "Crime", "Science-Fiction"],
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
      },
    },
    {
      id: 3,
      name: "Bitten",
      geners: ["Drama", "Horror", "Romance"],
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
      },
    },
  ];

  const [movieId, setMovieId] = useState("");

  const onEditClickHandler = (id) => {
    setMovieId(id);
  };

  return (
    <div>
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
            key={movie.id}
          >
            <Title size="5">{movie.name}</Title>
            <h3>Geners: {movie.geners}</h3>
            <img alt="movie" src={movie.image.medium} />
            <Buttons>
              <Button onClick={() => onEditClickHandler(movie.id)}>Edit</Button>
              <Button>Delete</Button>
            </Buttons>
          </Card>
        );
      })}
      {true ? null : <EditMovie movieId={movieId} />}
    </div>
  );
};

export default AllMovies;

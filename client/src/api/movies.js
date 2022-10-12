import axios from "axios";

const apiUrl = "http://localhost:5000";

export const addNewMovie = async (movie) => {
  try {
    const res = await axios.post(`${apiUrl}/movies/newMovie`, movie);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getMovies = async () => {
  try {
    const res = await axios.get(`${apiUrl}/movies/getMovies`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const res = await axios.delete(`${apiUrl}/movies/deleteMovie`, {
      data: { movieId },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateMovie = async (movie) => {
  try {
    const res = await axios.put(`${apiUrl}/movies/updateMovie`, movie);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

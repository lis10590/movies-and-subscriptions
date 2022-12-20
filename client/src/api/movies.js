import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
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
    const res = await axios.get(`${apiUrl}/movies/getMovies`, {
      headers: {
        Authorization: "Bearer".concat(" ", sessionStorage.getItem("token")),
      },
    });

    return res.data;
  } catch (err) {
    console.error(err);
    if (err.response.status === 401) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      window.location.href = "/";
    }
  }
};

export const getOneMovie = async (movieId) => {
  try {
    const res = await axios.get(`${apiUrl}/movies/getOneMovie/${movieId}`);
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

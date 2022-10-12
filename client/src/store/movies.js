import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewMovie,
  getMovies,
  updateMovie,
  deleteMovie,
  getOneMovie,
} from "../api/movies";

const initialMoviesState = {
  movies: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const movieAddition = createAsyncThunk(
  "movies/newMovie",
  async (movie, thunkAPI) => {
    try {
      return await addNewMovie(movie);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllMovies = createAsyncThunk(
  "movies/getMovies",
  async (thunkAPI) => {
    try {
      return await getMovies();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getMovie = createAsyncThunk(
  "movies",
  async (movieId, thunkAPI) => {
    try {
      return await getOneMovie(movieId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteOneMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (movieId, thunkAPI) => {
    try {
      return await deleteMovie(movieId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const movieUpdate = createAsyncThunk(
  "movies/updateMovie",
  async (movie, thunkAPI) => {
    try {
      return await updateMovie(movie);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    reset: (state) => initialMoviesState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(movieAddition.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(movieAddition.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies.push(action.payload);
      })
      .addCase(movieAddition.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies = action.payload;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteOneMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOneMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies = state.movies.filter(
          (client) => client._id !== action.payload.id
        );
      })
      .addCase(deleteOneMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(movieUpdate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(movieUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies.push(action.payload);
      })
      .addCase(movieUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default movieSlice.reducer;
export const { reset } = movieSlice.actions;
export const selectAllMovies = (state) => state.movies.movies;

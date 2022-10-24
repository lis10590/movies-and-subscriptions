import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWatchList, addToList, deleteWatchList } from "../api/watchList";

const initialWatchListState = {
  watchList: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const watchListAddition = createAsyncThunk(
  "watchList/addToList",
  async (movie, thunkAPI) => {
    try {
      return await addToList(movie);
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

export const getList = createAsyncThunk("watchList", async (thunkAPI) => {
  try {
    return await getWatchList();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteAllList = createAsyncThunk(
  "watchList/delete",
  async (id, thunkAPI) => {
    try {
      return await deleteWatchList(id);
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

const watchListSlice = createSlice({
  name: "watchList",
  initialState: initialWatchListState,
  reducers: {
    reset: (state) => initialWatchListState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(watchListAddition.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(watchListAddition.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.watchList.push(action.payload);
      })
      .addCase(watchListAddition.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.watchList = action.payload;
      })
      .addCase(getList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAllList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteAllList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.watchList = initialWatchListState;
      })
      .addCase(deleteAllList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default watchListSlice.reducer;
export const { reset } = watchListSlice.actions;
export const selectAllWatchList = (state) => state.watchList.watchList;

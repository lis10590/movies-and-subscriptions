import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersFromFile } from "../api/usersFromFile";

const initialUsersFromFileState = {
  usersFromFile: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getUsersFromFile = createAsyncThunk(
  "/usersfromfile",
  async (thunkAPI) => {
    try {
      return await getAllUsersFromFile();
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

const usersFromFileSlice = createSlice({
  name: "usersFromFile",
  initialState: initialUsersFromFileState,
  reducers: {
    reset: (state) => initialUsersFromFileState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getUsersFromFile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsersFromFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.usersFromFile = action.payload;
      })
      .addCase(getUsersFromFile.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default usersFromFileSlice.reducer;
export const { reset } = usersFromFileSlice.actions;
export const selectAllUsersFromFile = (state) =>
  state.usersFromFile.usersFromFile;

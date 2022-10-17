import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersFromFile, getOneUserFromFile } from "../api/usersFromFile";

const initialUsersFromFileState = {
  usersFromFile: [],
  userFromFile: {},
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

export const getUserFromFile = createAsyncThunk(
  "/usersfromfile/getOneUser",
  async (userId, thunkAPI) => {
    try {
      return await getOneUserFromFile(userId);
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
      })
      .addCase(getUserFromFile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserFromFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userFromFile = action.payload;
      })
      .addCase(getUserFromFile.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default usersFromFileSlice.reducer;
export const { reset } = usersFromFileSlice.actions;
export const selectAllUsersFromFile = (state) =>
  state.usersFromFile.usersFromFile;
export const selectOneUserFromFile = (state) =>
  state.usersFromFile.userFromFile;

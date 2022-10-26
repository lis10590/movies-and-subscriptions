import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsersFromFile,
  getOneUserFromFile,
  updateUserFromFile,
  deleteUserFromFile,
  addUserFromFile,
} from "../api/usersFromFile";

const initialUsersFromFileState = {
  usersFromFile: [],
  userFromFile: {},
  firstName: "",
  lastName: "",
  sessionTimeOut: 0,
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

export const updateUser = createAsyncThunk(
  "/usersfromfile/updateUser",
  async (obj, thunkAPI) => {
    try {
      return await updateUserFromFile(obj);
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

export const deleteUser = createAsyncThunk(
  "/usersfromfile/deleteUser",
  async (userId, thunkAPI) => {
    try {
      return await deleteUserFromFile(userId);
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

export const addUser = createAsyncThunk(
  "/usersfromfile/addUser",
  async (user, thunkAPI) => {
    try {
      return await addUserFromFile(user);
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
    changeFirstName: (state, action) => void (state.firstName = action.payload),
    changeLastName: (state, action) => void (state.lastName = action.payload),
    changeSessionTimeOut: (state, action) =>
      void (state.sessionTimeOut = action.payload),
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
        state.isError = true;
        state.message = action.payload;
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
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.usersFromFile = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.usersFromFile = state.usersFromFile.filter(
          (user) => user._id !== action.payload.id
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.usersFromFile = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default usersFromFileSlice.reducer;
export const usersFromFileActions = usersFromFileSlice.actions;
export const selectAllUsersFromFile = (state) =>
  state.usersFromFile.usersFromFile;
export const selectOneUserFromFile = (state) =>
  state.usersFromFile.userFromFile;

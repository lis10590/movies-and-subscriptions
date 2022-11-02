import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getOneUser,
  getUsers,
  addNewUser,
  deleteUser,
  updateUser,
  getOneUserByUsername,
  getAllUsersFromFile,
  getOneUserFromFile,
  getAllPermissions,
  getOnePermission,
} from "../api/users";

const initialUsersState = {
  users: [],
  usersFromFile: [],
  permissions: [],
  user: {},
  userFromFile: {},
  permission: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const userAddition = createAsyncThunk(
  "users/addUserAndPermissions",
  async (user, thunkAPI) => {
    try {
      return await addNewUser(user);
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

export const getAllUsers = createAsyncThunk(
  "users/getUsers",
  async (thunkAPI) => {
    try {
      return await getUsers();
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

export const getUser = createAsyncThunk(
  "users/getOneUser",
  async (userId, thunkAPI) => {
    try {
      return await getOneUser(userId);
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

export const getUserByUsername = createAsyncThunk(
  "users/getByUsername",
  async (username, thunkAPI) => {
    try {
      return await getOneUserByUsername(username);
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

export const deleteOneUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, thunkAPI) => {
    try {
      return await deleteUser(userId);
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

export const userUpdate = createAsyncThunk(
  "users/updateUser",
  async (user, thunkAPI) => {
    try {
      return await updateUser(user);
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

export const getPermissions = createAsyncThunk(
  "/permissions",
  async (thunkAPI) => {
    try {
      return await getAllPermissions();
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

export const getPermission = createAsyncThunk(
  "/permissions/getOnePermission",
  async (permissionId, thunkAPI) => {
    try {
      return await getOnePermission(permissionId);
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

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    reset: (state) => initialUsersState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(userAddition.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(userAddition.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload.users;
        state.userFromFile = action.payload.users_file;
        state.permissions = action.payload.permissions;
      })
      .addCase(userAddition.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })

      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
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
      .addCase(getPermissions.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPermissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.permissions = action.payload;
      })
      .addCase(getPermissions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPermission.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPermission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.permission = action.payload;
      })
      .addCase(getPermission.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getUserByUsername.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUserByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(deleteOneUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOneUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = state.users.filter(
          (user) => user._id !== action.payload.users
        );
        state.usersFromFile = state.usersFromFile.filter(
          (user) => user._id !== action.payload.users_file
        );
        state.permissions = state.permissions.filter(
          (user) => user._id !== action.payload.permissions
        );
      })
      .addCase(deleteOneUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(userUpdate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload.users;
        state.usersFromFile = action.payload.users_file;
        state.permissions = action.payload.permissions;
      })
      .addCase(userUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default usersSlice.reducer;
export const { reset } = usersSlice.actions;
export const selectAllUsers = (state) => state.users.users;
export const selectOneUser = (state) => state.users.user;
export const selectAllUsersFromFile = (state) => state.users.usersFromFile;
export const selectOneUserFromFile = (state) => state.users.userFromFile;
export const selectAllPermissions = (state) => state.users.permissions;
export const selectOnePermission = (state) => state.users.permission;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPermissions, getOnePermission } from "../api/permissions";

const initialPermissionsState = {
  permissions: [],
  permission: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

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

const permissionsSlice = createSlice({
  name: "permissions",
  initialState: initialPermissionsState,
  reducers: {
    reset: (state) => initialPermissionsState,
  },
  extraReducers: (builder) => {
    builder

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
      });
  },
});

export default permissionsSlice.reducer;
export const { reset } = permissionsSlice.actions;
export const selectAllPermissions = (state) => state.permissions.permissions;
export const selectOnePermission = (state) => state.permissions.permission;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMembers,
  addNewMember,
  updateMember,
  deleteMember,
  getOneMember,
} from "../api/members";

const initialMembersState = {
  members: [],
  member: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const memberAddition = createAsyncThunk(
  "members/newMember",
  async (member, thunkAPI) => {
    try {
      return await addNewMember(member);
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

export const getAllMembers = createAsyncThunk(
  "members/getMembers",
  async (thunkAPI) => {
    try {
      return await getMembers();
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

export const getMember = createAsyncThunk(
  "members/getOneMember",
  async (memberId, thunkAPI) => {
    try {
      return await getOneMember(memberId);
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

export const deleteOneMember = createAsyncThunk(
  "members/deleteMember",
  async (memberId, thunkAPI) => {
    try {
      return await deleteMember(memberId);
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

export const memberUpdate = createAsyncThunk(
  "members/updateMember",
  async (member, thunkAPI) => {
    try {
      return await updateMember(member);
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

const memberSlice = createSlice({
  name: "members",
  initialState: initialMembersState,
  reducers: {
    reset: (state) => initialMembersState,
    onChangeInputValue: (state, action) => (state.member = action.payload),
  },
  extraReducers: (builder) => {
    builder

      .addCase(memberAddition.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(memberAddition.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = action.payload.members;
      })
      .addCase(memberAddition.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllMembers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = action.payload;
      })
      .addCase(getAllMembers.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getMember.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.member = action.payload;
      })
      .addCase(getMember.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteOneMember.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOneMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = state.members.filter(
          (member) => member._id !== action.payload.id
        );
      })
      .addCase(deleteOneMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(memberUpdate.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(memberUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.members = action.payload;
      })
      .addCase(memberUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default memberSlice.reducer;
export const { reset, onChangeInputValue } = memberSlice.actions;
export const selectAllMembers = (state) => state.members.members;
export const selectMember = (state) => state.members.member;

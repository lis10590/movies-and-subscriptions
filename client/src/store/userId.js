import { createSlice } from "@reduxjs/toolkit";

const initialUserIdState = { id: "" };
const userIdSlice = createSlice({
  name: "userId",
  initialState: initialUserIdState,
  reducers: {
    editId(state, action) {
      state.id = action.payload;
    },
  },
});

export default userIdSlice.reducer;
export const userIdActions = userIdSlice.actions;

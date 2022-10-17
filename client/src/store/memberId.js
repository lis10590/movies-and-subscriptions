import { createSlice } from "@reduxjs/toolkit";

const initialMemberIdState = { id: "" };
const memberIdSlice = createSlice({
  name: "memberId",
  initialState: initialMemberIdState,
  reducers: {
    editId(state, action) {
      state.id = action.payload;
    },
  },
});

export default memberIdSlice.reducer;
export const memberIdActions = memberIdSlice.actions;

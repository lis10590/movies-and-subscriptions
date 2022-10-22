const editMembersReducer = (
  state = { name: "", email: "", city: "" },
  action
) => {
  switch (action.type) {
    case "onChangeName":
      return { ...state, name: action.payload };
    case "onChangeEmail":
      return { ...state, email: action.payload };
    case "onChangeCity":
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

export default editMembersReducer;
export const selectEditMember = (state) => state.editMember;

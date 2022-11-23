const editUsersReducer = (
  state = {
    first_name: "",
    last_name: "",
    username: "",
    session_time_out: "",
    user: "",
  },
  action
) => {
  switch (action.type) {
    case "onChangeFirstName":
      return { ...state, first_name: action.payload };
    case "onChangeLastName":
      return { ...state, last_name: action.payload };
    case "onChangeUsername":
      return { ...state, username: action.payload };
    case "onChangeSession":
      return { ...state, session_time_out: action.payload };
    case "onChangeUser":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default editUsersReducer;
export const selectEditUser = (state) => state.editUser;

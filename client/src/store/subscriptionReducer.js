const subscriptionReducer = (
  state = { id: "", movie: "", date: "" },
  action
) => {
  switch (action.type) {
    case "onChangeId":
      return { ...state, id: action.payload };
    case "onChangeMovie":
      return { ...state, movie: action.payload };
    case "onChangeDate":
      return { ...state, date: action.payload };

    default:
      return state;
  }
};

export default subscriptionReducer;
export const selectSubscription = (state) => state.subscription;

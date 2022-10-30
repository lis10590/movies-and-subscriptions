import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputUser from "./InputUser";
import { useDispatch, useSelector } from "react-redux";
import { userAddition, getAllUsers } from "../store/users";
import { useState, useEffect } from "react";
import { checkboxesActions } from "../store/checkboxes_permissions";
const AddUser = () => {
  const dispatch = useDispatch();
  const checkboxes = useSelector((state) => state.checkboxes);
  console.log(checkboxes);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const [inputObj, setInputObj] = useState({
    firstName: "",
    lastName: "",
    sessionTimeOut: "",
    username: "",
  });

  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setInputObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSaveClickHandler = () => {
    const obj = {
      username: inputObj.username,
      password: "",
      first_name: inputObj.firstName,
      last_name: inputObj.lastName,
      session_time_out: inputObj.sessionTimeOut,
      created_date: new Date().toLocaleDateString("en-GB"),
    };

    dispatch(userAddition(obj));
  };

  const changeViewSubHandler = () => {
    dispatch(checkboxesActions.changeViewSub(!checkboxes.viewSub));
  };
  const changeCreateSubHandler = () => {
    dispatch(checkboxesActions.changeCreateSub(!checkboxes.createSub));
  };
  const changeUpdateSubHandler = () => {
    dispatch(checkboxesActions.changeUpdateSub(!checkboxes.updateSub));
  };
  const changeDeleteSubHandler = () => {
    dispatch(checkboxesActions.changeDeleteSub(!checkboxes.deleteSub));
  };

  const changeViewMoviesHandler = () => {
    dispatch(checkboxesActions.changeViewMovies(!checkboxes.viewMovies));
  };

  const changeCreateMoviesHandler = () => {
    dispatch(checkboxesActions.changeCreateMovies(!checkboxes.createMovies));
  };

  const changeUpdateMoviesHandler = () => {
    dispatch(checkboxesActions.changeUpdateMovies(!checkboxes.updateMovies));
  };

  const changeDeleteMoviesHandler = () => {
    dispatch(checkboxesActions.changeDeleteMovies(!checkboxes.deleteMovies));
  };

  return (
    <Box
      style={{
        maxWidth: "25rem",
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Title>Add User</Title>
      <InputUser
        firstNameValue={inputObj.firstName}
        lastNameValue={inputObj.lastName}
        sessionValue={inputObj.sessionTimeOut}
        usernameValue={inputObj.username}
        onChangeFirstName={onChangeInputHandler}
        onChangeLastName={onChangeInputHandler}
        onChangeSession={onChangeInputHandler}
        onChangeUsername={onChangeInputHandler}
        checkedViewSub={checkboxes.viewSub}
        checkedCreateSub={checkboxes.createSub}
        checkedDelSub={checkboxes.deleteSub}
        checkedUpdateSub={checkboxes.updateSub}
        checkedViewMovies={checkboxes.viewMovies}
        checkedCreateMovies={checkboxes.createMovies}
        checkedDelMovies={checkboxes.deleteMovies}
        checkedUpdateMovies={checkboxes.updateMovies}
        onChangeViewSub={changeViewSubHandler}
        onChangeCreateSub={changeCreateSubHandler}
        onChangeDelSub={changeDeleteSubHandler}
        onChangeUpdateSub={changeUpdateSubHandler}
        onChangeViewMovies={changeViewMoviesHandler}
        onChangeCreateMovies={changeCreateMoviesHandler}
        onChangeDelMovies={changeDeleteMoviesHandler}
        onChangeUpdateMovies={changeUpdateMoviesHandler}
      />
      <Buttons className="is-flex is-justify-content-center mt-6">
        <Button onClick={onSaveClickHandler}>Save</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default AddUser;

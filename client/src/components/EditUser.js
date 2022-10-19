import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputUser from "./InputUser";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getUserFromFile,
  selectOneUserFromFile,
  updateUser,
} from "../store/usersFromFile";
import { getPermission, selectOnePermission } from "../store/permissions";
import { getUser, selectOneUser } from "../store/users";
import { checkboxesActions } from "../store/checkboxes_permissions";

const EditUser = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId.id);
  const checkboxes = useSelector((state) => state.checkboxes);

  useEffect(() => {
    dispatch(getUserFromFile(userId));
    dispatch(getPermission(userId));
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  const user = useSelector(selectOneUserFromFile);
  console.log(user);
  const permission = useSelector(selectOnePermission);
  console.log(permission);

  const userDB = useSelector(selectOneUser);
  console.log(userDB);

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    sessionTimeOut: "",
    username: "",
  });

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

  const onChangeInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onUpdateClick = () => {
    const obj = {
      ...inputValue,
      _id: userId,
    };
    dispatch(updateUser(obj));
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
      <Title>Edit User</Title>
      <InputUser
        plchFirstName={user.first_name}
        plchLastName={user.last_name}
        plchSession={user.session_time_out}
        plchUsername={userDB.username}
        firstNameValue={inputValue.firstName}
        lastNameValue={inputValue.lastName}
        sessionValue={inputValue.sessionTimeOut}
        usernameValue={inputValue.username}
        onChangeFirstName={onChangeInputValue}
        onChangeLastName={onChangeInputValue}
        onChangeSession={onChangeInputValue}
        onChangeUsername={onChangeInputValue}
        checkedViewSub={checkboxes.viewSub ? true : false}
        checkedCreateSub={checkboxes.createSub ? true : false}
        checkedDelSub={checkboxes.deleteSub ? true : false}
        checkedUpdateSub={checkboxes.updateSub ? true : false}
        checkedViewMovies={checkboxes.viewMovies ? true : false}
        checkedCreateMovies={checkboxes.createMovies ? true : false}
        checkedDelMovies={checkboxes.deleteMovies ? true : false}
        checkedUpdateMovies={checkboxes.updateMovies ? true : false}
        onChangeViewSub={changeViewSubHandler}
        onChangeCreateSub={changeCreateSubHandler}
        onChangeDelSub={changeDeleteSubHandler}
        onChangeUpdateSub={changeUpdateSubHandler}
        onChangeViewMovies={changeViewMoviesHandler}
        onChangeCreateMovies={changeCreateMoviesHandler}
        onChangeDelMovies={changeDeleteMoviesHandler}
        onChangeUpdateMovies={changeUpdateMoviesHandler}
      />
      <Buttons className="is-flex is-justify-content-center">
        <Button onClick={onUpdateClick}>Update</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default EditUser;

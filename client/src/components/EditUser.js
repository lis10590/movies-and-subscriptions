import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputUser from "./InputUser";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getUser,
  selectOneUser,
  userUpdate,
  getUserFromFile,
  selectOneUserFromFile,
  getPermission,
  getAllUsersAndPermissions,
} from "../store/users";
import { checkboxesActions } from "../store/checkboxes_permissions";
import { selectEditUser } from "../store/usersReducer";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.userId.id);
  const checkboxes = useSelector((state) => state.checkboxes);
  const editUser = useSelector(selectEditUser);

  useEffect(() => {
    dispatch(getUserFromFile(userId));
    dispatch(getPermission(userId));
    dispatch(getUser(userId));
    dispatch(getAllUsersAndPermissions());
  }, [dispatch, userId]);

  const user = useSelector(selectOneUserFromFile);

  const userDB = useSelector(selectOneUser);

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

  const onChangeFirstNameHandler = (e) => {
    dispatch({ type: "onChangeFirstName", payload: e.target.value });
  };

  const onChangeLastNameHandler = (e) => {
    dispatch({ type: "onChangeLastName", payload: e.target.value });
  };

  const onChangeUsernameHandler = (e) => {
    dispatch({ type: "onChangeUsername", payload: e.target.value });
  };

  const onChangeSessionHandler = (e) => {
    dispatch({ type: "onChangeSession", payload: e.target.value });
  };

  const checkPermissions = () => {
    let arr = [];
    for (const per in checkboxes) {
      if (checkboxes[per]) {
        arr.push(per);
      }
    }
    let arr2 = [];
    for (const item of arr) {
      switch (item) {
        case "createSub":
          arr2.push("Create Subscriptions");
          break;
        case "viewSub":
          arr2.push("View Subscriptions");
          break;
        case "updateSub":
          arr2.push("Update Subscriptions");
          break;
        case "deleteSub":
          arr2.push("Delete Subscriptions");
          break;
        case "createMovies":
          arr2.push("Create Movies");
          break;
        case "viewMovies":
          arr2.push("View Movies");
          break;
        case "updateMovies":
          arr2.push("Update Movies");
          break;
        case "deleteMovies":
          arr2.push("Delete Movies");
          break;
        default:
          console.log("no match");
      }
    }

    return arr2;
  };

  const onUpdateClick = () => {
    const permissions = checkPermissions();

    const obj = {
      ...editUser,
      _id: userId,
      permissions,
    };

    dispatch(userUpdate(obj));
    navigate("/allusers");
  };

  const onCancelClick = () => {
    navigate("/allusers");
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
        firstNameValue={editUser.first_name}
        lastNameValue={editUser.last_name}
        sessionValue={editUser.session_time_out}
        usernameValue={editUser.username}
        onChangeFirstName={onChangeFirstNameHandler}
        onChangeLastName={onChangeLastNameHandler}
        onChangeSession={onChangeSessionHandler}
        onChangeUsername={onChangeUsernameHandler}
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
        <Button onClick={onCancelClick}>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default EditUser;

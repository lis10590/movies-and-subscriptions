import { Card, Button, Title, Buttons } from "react-bulma-companion";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userIdActions } from "../store/userId";
import { useNavigate } from "react-router-dom";
import { checkboxesActions } from "../store/checkboxes_permissions";
import {
  getAllUsers,
  selectAllUsers,
  getPermissions,
  selectAllPermissions,
  getUsersFromFile,
  selectAllUsersFromFile,
} from "../store/users";
import { deleteOneUser } from "../store/users";

const AllUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsersFromFile());
    dispatch(getPermissions());
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector(selectAllUsersFromFile);
  const permissions = useSelector(selectAllPermissions);
  const usersDB = useSelector(selectAllUsers);
  console.log(usersDB);
  let username = {};

  const comboArr = (users, permissions) => {
    let arr = [];
    for (const user of users) {
      for (const per of permissions) {
        if (user._id === per._id) {
          const obj = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            created_date: user.created_date,
            session_time_out: user.session_time_out,
            permissions: per.permissions,
          };

          arr.push(obj);
        }
      }
    }

    return arr;
  };

  const EditUserHandler = (id) => {
    dispatch(userIdActions.editId(id));
    let arrPermissions = [];
    let chosenUser = {};

    const perArr = comboArr(users, permissions);
    for (const per of perArr) {
      if (per._id === id) {
        arrPermissions = per.permissions;
        chosenUser = per;
      }
    }

    for (const item of usersDB) {
      if (item._id === id) {
        username = item;
      }
    }

    dispatch({ type: "onChangeFirstName", payload: chosenUser.first_name });
    dispatch({ type: "onChangeLastName", payload: chosenUser.last_name });
    dispatch({ type: "onChangeUsername", payload: username.username });
    dispatch({ type: "onChangeSession", payload: chosenUser.session_time_out });

    for (const per of arrPermissions) {
      if (per === "View Subscriptions") {
        dispatch(checkboxesActions.changeViewSub(true));
      } else if (per === "Create Subscriptions") {
        dispatch(checkboxesActions.changeCreateSub(true));
      } else if (per === "Delete Subscriptions") {
        dispatch(checkboxesActions.changeDeleteSub(true));
      } else if (per === "Update Subscriptions") {
        dispatch(checkboxesActions.changeUpdateSub(true));
      } else if (per === "View Movies") {
        dispatch(checkboxesActions.changeViewMovies(true));
      } else if (per === "Create Movies") {
        dispatch(checkboxesActions.changeCreateMovies(true));
      } else if (per === "Delete Movies") {
        dispatch(checkboxesActions.changeDeleteMovies(true));
      } else {
        dispatch(checkboxesActions.changeUpdateMovies(true));
      }
    }

    navigate("/edituser");
  };

  const deleteUserHandler = (id) => {
    dispatch(deleteOneUser(id));
  };

  return (
    <div>
      <Title>All Users</Title>
      {comboArr(users, permissions).map((user) => {
        return (
          <Card
            style={{
              maxWidth: "25rem",
              marginBottom: "2rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            key={user._id}
          >
            <p>
              Name: {user.first_name} {user.last_name}
            </p>
            {usersDB.map((userDB) => {
              if (userDB._id === user._id) {
                return <p key={userDB._id}>Username: {userDB.username}</p>;
              }
            })}

            <p>Session Time Out (Minutes): {user.session_time_out} </p>
            <p>Created Data: {user.created_date}</p>
            <p>
              Permissions:{" "}
              {user.permissions.map((per, index) => {
                return <span key={index}>{per},</span>;
              })}
            </p>
            <Buttons className="is-justify-content-center mt-4">
              <Button
                onClick={() => {
                  EditUserHandler(user._id);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  deleteUserHandler(user._id);
                }}
              >
                Delete
              </Button>
            </Buttons>
          </Card>
        );
      })}
    </div>
  );
};

export default AllUsers;

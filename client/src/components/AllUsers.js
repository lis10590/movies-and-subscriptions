import { Card, Button, Title, Buttons } from "react-bulma-companion";
import {
  selectAllUsersFromFile,
  getUsersFromFile,
} from "../store/usersFromFile";
import { selectAllPermissions, getPermissions } from "../store/permissions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userIdActions } from "../store/userId";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsersFromFile());
    dispatch(getPermissions());
  }, [dispatch]);

  const users = useSelector(selectAllUsersFromFile);
  const permissions = useSelector(selectAllPermissions);

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
    navigate("/edituser");
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
            <p>Username: </p>
            <p>Session Time Out (Minutes): {user.session_time_out} </p>
            <p>Created Data: {user.created_date}</p>
            <p>
              Permissions:{" "}
              {user.permissions.map((per) => {
                return <span>{per},</span>;
              })}
            </p>
            <Buttons>
              <Button
                onClick={() => {
                  EditUserHandler(user._id);
                }}
              >
                Edit
              </Button>
              <Button>Delete</Button>
            </Buttons>
          </Card>
        );
      })}
    </div>
  );
};

export default AllUsers;

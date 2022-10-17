import { Card, Button, Title } from "react-bulma-companion";
import {
  selectAllUsersFromFile,
  getUsersFromFile,
} from "../store/usersFromFile";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const AllUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFromFile());
  }, [dispatch]);

  const users = useSelector(selectAllUsersFromFile);
  console.log(users);

  return (
    <div>
      <Title>All Users</Title>
      {users.map((user) => {
        return (
          <Card
            style={{
              maxWidth: "25rem",
              marginBottom: "2rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p>
              Name: {user.first_name} {user.last_name}
            </p>
            <p>Username: </p>
            <p>Session Time Out (Minutes): {user.session_time_out} </p>
            <p>Created Data: {user.created_date}</p>
            <p>Permissions:</p>
          </Card>
        );
      })}
    </div>
  );
};

export default AllUsers;

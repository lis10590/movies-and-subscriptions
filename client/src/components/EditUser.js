import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputUser from "./InputUser";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserFromFile, selectOneUserFromFile } from "../store/usersFromFile";
import { getPermission, selectOnePermission } from "../store/permissions";
import { getUser, selectOneUser } from "../store/users";

const EditUser = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId.id);

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

  const [permissions, setPermissions] = useState({
    viewSub: false,
    createSub: false,
    deleteSub: false,
    updateSub: false,
    viewMovies: false,
    createMovies: false,
    deleteMovies: false,
    updateMovies: false,
  });

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
        checked={permissions.viewSub ? true : false}
      />
      <Buttons className="is-flex is-justify-content-center">
        <Button>Update</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default EditUser;

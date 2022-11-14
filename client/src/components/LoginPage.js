import {
  Box,
  Field,
  Input,
  Label,
  Control,
  Button,
  Title,
} from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/auth";
import { useNavigate } from "react-router-dom";
import {
  getUsersFromFile,
  selectAllUsersFromFile,
  getAllUsers,
  selectAllUsers,
} from "../store/users";
import { reset } from "../store/auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUsersFromFile());
  }, [dispatch]);

  const users = useSelector(selectAllUsers);
  const usersFromFile = useSelector(selectAllUsersFromFile);
  console.log(usersFromFile);
  console.log(users);

  const tokenData = useSelector((state) => state.auth.token);
  console.log(tokenData);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onChangeUser = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const findUserId = () => {
    let id = "";
    for (const item of users) {
      if (item.username === user.username) {
        id = item._id;
      }
    }
    for (const item of usersFromFile) {
      if (item._id === id) {
        return item.session_time_out;
      }
    }
  };

  const removeToken = () => {
    sessionStorage.removeItem("token");
    dispatch(reset());
  };

  const onLoginClick = () => {
    dispatch(userLogin(user));
    navigate("/mainpage");
    // setTimeout(() => {
    //   removeToken();
    //   navigate("/");
    // }, parseInt(findUserId()) * 60 * 1000);
  };
  return (
    <div>
      <NavbarLogin />
      <Title style={{ fontFamily: "Alkalami, serif" }}>
        Movies - Subscription Website
      </Title>
      <Box
        style={{
          maxWidth: "25rem",
          marginTop: "10rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Field>
          <Label size="small">Username</Label>
          <Control className="has-icons-left">
            <Input
              name="username"
              type="text"
              size="small"
              onChange={onChangeUser}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </Control>
        </Field>
        <Field>
          <Label size="small">Password</Label>
          <Control className="has-icons-left">
            <Input
              name="password"
              type="password"
              size="small"
              onChange={onChangeUser}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </Control>
        </Field>
        <Field>
          <Control>
            <Button onClick={onLoginClick}>Login</Button>
          </Control>
        </Field>
        <Field component={Link} to="/createaccount">
          New User? Create Account
        </Field>
      </Box>
    </div>
  );
};

export default LoginPage;

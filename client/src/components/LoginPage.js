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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/auth";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import popcorn from "../assets/popcorn.png";
import video from "../assets/video-player.png";
import film from "../assets/film-reel.png";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onLoginClick = () => {
    dispatch(userLogin(user));
    dispatch({ type: "onChangeUser", payload: user.username });
    sessionStorage.setItem("username", user.username);
    navigate("/mainpage");
  };
  return (
    <div>
      <NavbarLogin />
      <Title style={{ fontFamily: "Alkalami, serif" }}>
        Movies & Subscriptions Website
      </Title>
      <img
        src={popcorn}
        style={{ width: "5rem", position: "relative", right: "10rem" }}
      ></img>
      <img
        src={film}
        style={{
          width: "5rem",
          position: "relative",
          left: "13rem",
          top: "5rem",
        }}
      ></img>
      <Box
        style={{
          maxWidth: "25rem",
          marginTop: "2rem",
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
            <Button onClick={onLoginClick} color="primary">
              Login
            </Button>
          </Control>
        </Field>
        <Field component={Link} to="/createaccount">
          New User? Create Account
        </Field>
      </Box>
      <img
        src={video}
        style={{
          width: "5rem",
          position: "relative",
          right: "17rem",
          bottom: "5rem",
        }}
      ></img>
    </div>
  );
};

export default LoginPage;

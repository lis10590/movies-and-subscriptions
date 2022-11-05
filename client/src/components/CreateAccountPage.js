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
import { userRegistration } from "../store/auth";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const onChangeUser = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createAccount = () => {
    if (user.password === user.password2) {
      const obj = {
        username: user.username,
        password: user.password,
      };

      dispatch(userRegistration(obj));
      navigate("/mainpage");
    }
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
          marginTop: "7rem",
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
          <Label size="small">Confirm Password</Label>
          <Control className="has-icons-left">
            <Input
              name="password2"
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
            <Button onClick={createAccount}>Create Account</Button>
          </Control>
        </Field>
        <Field component={Link} to="/">
          Already Registered? Go to Login Page
        </Field>
      </Box>
    </div>
  );
};

export default CreateAccountPage;

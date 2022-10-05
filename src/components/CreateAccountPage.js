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
const CreateAccountPage = () => {
  return (
    <div>
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
            <Input name="username" type="text" size="small" />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </Control>
        </Field>
        <Field>
          <Label size="small">Password</Label>
          <Control className="has-icons-left">
            <Input name="password" type="password" size="small" />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </Control>
        </Field>
        <Field>
          <Label size="small">Confirm Password</Label>
          <Control className="has-icons-left">
            <Input name="password2" type="password" size="small" />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </Control>
        </Field>
        <Field>
          <Control>
            <Button>Create Account</Button>
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

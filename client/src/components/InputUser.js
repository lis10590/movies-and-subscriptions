import { Field, Input, Label, Control } from "react-bulma-companion";

const InputUser = (props) => {
  return (
    <div>
      <Field>
        <Label size="small">First Name</Label>
        <Control className="has-icons-left">
          <Input
            name="firstName"
            type="text"
            size="small"
            value={props.firstNameValue}
            onChange={props.onChangeFirstName}
            placeholder={props.plchFirstName}
          />
        </Control>
      </Field>
      <Field>
        <Label size="small">Last Name</Label>
        <Control className="has-icons-left">
          <Input
            name="lastName"
            type="text"
            size="small"
            value={props.lastNameValue}
            onChange={props.onChangeLastName}
            placeholder={props.plchLastName}
          />
        </Control>
      </Field>
      <Field>
        <Label size="small">Username</Label>
        <Control className="has-icons-left">
          <Input
            name="username"
            type="text"
            size="small"
            value={props.usernameValue}
            onChange={props.onChangeUsername}
            placeholder={props.plchUsername}
          />
        </Control>
      </Field>
      <Field>
        <Label size="small">Session Time Out (Minutes)</Label>
        <Control className="has-icons-left">
          <Input
            name="session"
            type="text"
            size="small"
            value={props.sessionValue}
            onChange={props.onChangeSession}
            placeholder={props.plchSession}
          />
        </Control>
      </Field>
      <Field className="is-flex is-flex-direction-column is-align-items-flex-start">
        <Label>
          <input type="checkbox" checked={props.checked} />
          &nbsp; View Subscriptions
        </Label>
        <Label>
          <input type="checkbox" />
          &nbsp; Create Subscriptions
        </Label>
        <Label>
          <input type="checkbox" />
          &nbsp; Delete Subscriptions
        </Label>
        <Label>
          <input type="checkbox" />
          &nbsp; Update Subscriptions
        </Label>
        <Label>
          <input type="checkbox" />
          &nbsp; View Movies
        </Label>
        <Label>
          <input type="checkbox" />
          &nbsp; Create Movies
        </Label>
        <Label>
          <input type="checkbox" />
          &nbsp; Delete Movies
        </Label>
        <Label>
          <input type="checkbox" />
          &nbsp; Update Movies
        </Label>
      </Field>
    </div>
  );
};

export default InputUser;

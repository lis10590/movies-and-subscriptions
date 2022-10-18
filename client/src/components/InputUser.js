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
          <input
            type="checkbox"
            checked={props.checkedViewSub}
            onChange={props.onChangeViewSub}
          />
          &nbsp; View Subscriptions
        </Label>
        <Label>
          <input
            type="checkbox"
            checked={props.checkedCreateSub}
            onChange={props.onChangeCreateSub}
          />
          &nbsp; Create Subscriptions
        </Label>
        <Label>
          <input
            type="checkbox"
            checked={props.checkedDelSub}
            onChange={props.onChangeDelSub}
          />
          &nbsp; Delete Subscriptions
        </Label>
        <Label>
          <input
            type="checkbox"
            checked={props.checkedUpdateSub}
            onChange={props.onChangeUpdateSub}
          />
          &nbsp; Update Subscriptions
        </Label>
        <Label>
          <input
            type="checkbox"
            checked={props.checkedViewMovies}
            onChange={props.onChangeViewMovies}
          />
          &nbsp; View Movies
        </Label>
        <Label>
          <input
            type="checkbox"
            checked={props.checkedCreateMovies}
            onChange={props.onChangeCreateMovies}
          />
          &nbsp; Create Movies
        </Label>
        <Label>
          <input
            type="checkbox"
            checked={props.checkedDelMovies}
            onChange={props.onChangeDelMovies}
          />
          &nbsp; Delete Movies
        </Label>
        <Label>
          <input
            type="checkbox"
            checked={props.checkedUpdateMovies}
            onChange={props.onChangeUpdateMovies}
          />
          &nbsp; Update Movies
        </Label>
      </Field>
    </div>
  );
};

export default InputUser;

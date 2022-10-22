import { Field, Input, Label, Control } from "react-bulma-companion";

const InputMembers = (props) => {
  return (
    <div>
      <Field>
        <Label size="small">Name</Label>
        <Control className="has-icons-left">
          <Input
            name="name"
            type="text"
            size="small"
            value={props.nameValue}
            placeholder={props.plchName}
            onChange={props.onChangeName}
          />
        </Control>
      </Field>
      <Field>
        <Label size="small">Email</Label>
        <Control className="has-icons-left">
          <Input
            name="email"
            type="text"
            size="small"
            value={props.emailValue}
            onChange={props.onChangeEmail}
            placeholder={props.plchEmail}
          />
        </Control>
      </Field>
      <Field>
        <Label size="small">City</Label>
        <Control className="has-icons-left">
          <Input
            name="city"
            type="text"
            size="small"
            value={props.cityValue}
            onChange={props.onChangeCity}
            placeholder={props.plchCity}
          />
        </Control>
      </Field>
    </div>
  );
};

export default InputMembers;

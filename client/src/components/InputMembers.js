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
            placeholder={props.plchName}
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
            placeholder={props.plchCity}
          />
        </Control>
      </Field>
    </div>
  );
};

export default InputMembers;

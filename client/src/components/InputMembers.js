import { Field, Input, Label, Control } from "react-bulma-companion";

const InputMembers = () => {
  return (
    <div>
      <Field>
        <Label size="small">Name</Label>
        <Control className="has-icons-left">
          <Input name="name" type="text" size="small" />
        </Control>
      </Field>
      <Field>
        <Label size="small">Email</Label>
        <Control className="has-icons-left">
          <Input name="email" type="text" size="small" />
        </Control>
      </Field>
      <Field>
        <Label size="small">City</Label>
        <Control className="has-icons-left">
          <Input name="city" type="text" size="small" />
        </Control>
      </Field>
    </div>
  );
};

export default InputMembers;

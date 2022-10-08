import { Field, Input, Label, Control } from "react-bulma-companion";

const InputMovies = () => {
  return (
    <div>
      <Field>
        <Label size="small">Name</Label>
        <Control className="has-icons-left">
          <Input name="name" type="text" size="small" />
        </Control>
      </Field>
      <Field>
        <Label size="small">Genres</Label>
        <Control className="has-icons-left">
          <Input name="genres" type="text" size="small" />
        </Control>
      </Field>
      <Field>
        <Label size="small">Image Url</Label>
        <Control className="has-icons-left">
          <Input name="imgurl" type="text" size="small" />
        </Control>
      </Field>
      <Field>
        <Label size="small">Premired</Label>
        <Control className="has-icons-left">
          <Input name="premired" type="text" size="small" />
        </Control>
      </Field>
    </div>
  );
};

export default InputMovies;

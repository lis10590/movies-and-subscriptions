import { Field, Input, Label, Control } from "react-bulma-companion";

const InputMovies = (props) => {
  return (
    <div>
      <Field>
        <Label size="small">Name</Label>
        <Control className="has-icons-left">
          <Input name="name" type="text" size="small" value={props.nameValue} />
        </Control>
      </Field>
      <Field>
        <Label size="small">Genres</Label>
        <Control className="has-icons-left">
          <Input
            name="genres"
            type="text"
            size="small"
            value={props.genresValue}
          />
        </Control>
      </Field>
      <Field>
        <Label size="small">Image Url</Label>
        <Control className="has-icons-left">
          <Input
            name="imgurl"
            type="text"
            size="small"
            value={props.imgurlValue}
          />
        </Control>
      </Field>
      <Field>
        <Label size="small">Premired</Label>
        <Control className="has-icons-left">
          <Input
            name="premired"
            type="text"
            size="small"
            value={props.premieredValue}
          />
        </Control>
      </Field>
    </div>
  );
};

export default InputMovies;

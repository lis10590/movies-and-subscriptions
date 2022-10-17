import { Field, Input, Label, Control } from "react-bulma-companion";

const InputMovies = (props) => {
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
            onChange={props.onChangeName}
          />
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
            onChange={props.onChangeGenres}
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
            onChange={props.onChangeImg}
          />
        </Control>
      </Field>
      <Field>
        <Label size="small">Premiered</Label>
        <Control className="has-icons-left">
          <Input
            name="premiered"
            type="text"
            size="small"
            value={props.premieredValue}
            onChange={props.onChangePremiered}
          />
        </Control>
      </Field>
    </div>
  );
};

export default InputMovies;

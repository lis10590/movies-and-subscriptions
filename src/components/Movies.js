import { Tabs, Field, Input, Button } from "react-bulma-companion";

const Movies = () => {
  return (
    <div>
      <Tabs>
        <Tabs.List className="is-large">
          <Tabs.ListItem active>
            <Tabs.Link>All Movies</Tabs.Link>
          </Tabs.ListItem>
          <Tabs.ListItem>
            <Tabs.Link>Add Movie</Tabs.Link>
          </Tabs.ListItem>
        </Tabs.List>
      </Tabs>
      <Field>
        Find Movie
        <Input
          name="findMovie"
          type="text"
          style={{ maxWidth: "20rem" }}
          className="ml-2 mr-2"
        />
        <Button>Find</Button>
      </Field>
    </div>
  );
};

export default Movies;

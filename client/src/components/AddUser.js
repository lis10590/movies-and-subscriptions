import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMovies from "./InputMovies";
const AddUser = () => {
  return (
    <Box
      style={{
        maxWidth: "25rem",
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Title>Add User</Title>
      <InputMovies />
      <Buttons className="is-flex is-justify-content-center">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default AddUser;

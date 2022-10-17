import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputUser from "./InputUser";
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
      <InputUser />
      <Buttons className="is-flex is-justify-content-center mt-6">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default AddUser;

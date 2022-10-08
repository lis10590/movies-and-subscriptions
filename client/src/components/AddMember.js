import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMembers from "./InputMembers";

const AddMember = () => {
  return (
    <Box
      style={{
        maxWidth: "25rem",
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Title>Add Movie</Title>
      <InputMembers />
      <Buttons className="is-flex is-justify-content-center">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default AddMember;

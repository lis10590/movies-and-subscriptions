import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMembers from "./InputMembers";
import { getAllMembers } from "../store/members";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AddMember = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);
  return (
    <Box
      style={{
        maxWidth: "25rem",
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Title>Add Member</Title>
      <InputMembers />
      <Buttons className="is-flex is-justify-content-center">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default AddMember;

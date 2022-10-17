import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMembers from "./InputMembers";
import { selectMember, getMember } from "../store/members";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const EditMember = () => {
  const memberId = useSelector((state) => state.memberId.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMember(memberId));
  }, [dispatch, memberId]);

  const member = useSelector(selectMember);

  console.log(member);
  return (
    <Box
      style={{
        maxWidth: "25rem",
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Title>Edit Member</Title>
      <InputMembers />
      <Buttons className="is-flex is-justify-content-center">
        <Button>Update</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default EditMember;

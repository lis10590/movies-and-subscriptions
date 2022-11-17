import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMembers from "./InputMembers";
import { getAllMembers, memberAddition } from "../store/members";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);

  const [member, setMember] = useState({
    name: "",
    email: "",
    city: "",
  });
  const onChangeMember = (e) => {
    const { name, value } = e.target;
    setMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSaveMember = () => {
    dispatch(memberAddition(member));
    navigate("/allMembers");
  };

  const onCancelMember = () => {
    navigate("/allMembers");
  };
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
      <InputMembers
        nameValue={member.name}
        onChangeName={onChangeMember}
        emailValue={member.email}
        onChangeEmail={onChangeMember}
        cityValue={member.city}
        onChangeCity={onChangeMember}
      />
      <Buttons className="is-flex is-justify-content-center">
        <Button onClick={onSaveMember}>Save</Button>
        <Button onClick={onCancelMember}>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default AddMember;

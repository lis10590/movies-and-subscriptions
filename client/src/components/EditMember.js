import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMembers from "./InputMembers";
import {
  selectMember,
  getMember,
  getAllMembers,
  memberUpdate,
} from "../store/members";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectEditMember } from "../store/membersReducer";

const EditMember = () => {
  const memberId = useSelector((state) => state.memberId.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editMember = useSelector(selectEditMember);

  useEffect(() => {
    dispatch(getMember(memberId));
    dispatch(getAllMembers());
  }, [dispatch, memberId]);

  const member = useSelector(selectMember);

  const onChangeNameHandler = (e) => {
    dispatch({ type: "onChangeName", payload: e.target.value });
  };

  const onChangeEmailHandler = (e) => {
    dispatch({ type: "onChangeEmail", payload: e.target.value });
  };

  const onChangeCityHandler = (e) => {
    dispatch({ type: "onChangeCity", payload: e.target.value });
  };

  const onCancelClick = () => {
    navigate("/allmembers");
  };

  const onUpdateClick = () => {
    const obj = {
      ...editMember,
      id: memberId,
    };

    dispatch(memberUpdate(obj));
    navigate("/allmembers");
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
      <Title>Edit Member</Title>
      <InputMembers
        plchName={member.name}
        plchEmail={member.email}
        plchCity={member.city}
        nameValue={editMember.name}
        emailValue={editMember.email}
        cityValue={editMember.city}
        onChangeName={onChangeNameHandler}
        onChangeEmail={onChangeEmailHandler}
        onChangeCity={onChangeCityHandler}
      />
      <Buttons className="is-flex is-justify-content-center">
        <Button onClick={onUpdateClick}>Update</Button>
        <Button onClick={onCancelClick}>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default EditMember;

import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputMembers from "./InputMembers";
import { getAllMembers, memberAddition } from "../store/members";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarMembers from "./NavbarMembers";

const AddMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);
  const permissions = useSelector((state) => state.members.permissions);
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
    navigate("/allmembers");
  };

  const onCancelMember = () => {
    navigate("/allmembers");
  };

  const createSubsCheck = () => {
    if (Object.keys(permissions).length !== 0) {
      for (const property in permissions) {
        if (
          property === "Create Subscriptions" &&
          permissions[property] === false
        ) {
          return false;
        } else if (
          property === "Create Subscriptions" &&
          permissions[property] === true
        ) {
          return true;
        }
      }
    }
  };
  return (
    <div>
      {location.pathname === "/addmember" ? <NavbarMembers /> : null}
      {createSubsCheck() === true ? (
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
      ) : (
        <div>You are not Authorized!</div>
      )}
    </div>
  );
};

export default AddMember;

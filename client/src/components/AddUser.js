import { Box, Button, Title, Buttons } from "react-bulma-companion";
import InputUser from "./InputUser";
import { useDispatch } from "react-redux";
import { addUser } from "../store/usersFromFile";
import { userAddition } from "../store/users";
import { useState } from "react";
const AddUser = () => {
  const dispatch = useDispatch();

  const [inputObj, setInputObj] = useState({
    firstName: "",
    lastName: "",
    sessionTimeOut: "",
    username: "",
  });

  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setInputObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSaveClickHandler = () => {
    const obj1 = {};

    const obj2 = {
      _id: "454353hf675",
      first_name: inputObj.firstName,
      last_name: inputObj.lastName,
      session_time_out: inputObj.sessionTimeOut,
    };
    dispatch(addUser(obj2));
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
      <Title>Add User</Title>
      <InputUser
        firstNameValue={inputObj.firstName}
        lastNameValue={inputObj.lastName}
        sessionValue={inputObj.sessionTimeOut}
        usernameValue={inputObj.username}
        onChangeFirstName={onChangeInputHandler}
        onChangeLastName={onChangeInputHandler}
        onChangeSession={onChangeInputHandler}
        onChangeUsername={onChangeInputHandler}
      />
      <Buttons className="is-flex is-justify-content-center mt-6">
        <Button onClick={onSaveClickHandler}>Save</Button>
        <Button>Cancel</Button>
      </Buttons>
    </Box>
  );
};

export default AddUser;

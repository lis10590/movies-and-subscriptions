import { useEffect, useState } from "react";
import { Card, Title, Buttons, Button } from "react-bulma-companion";
import { getAllMembers, selectAllMembers } from "../store/members";
import { useSelector, useDispatch } from "react-redux";
import { memberIdActions } from "../store/memberId";
import { useNavigate } from "react-router-dom";
import {
  getList,
  selectAllWatchList,
  watchListAddition,
} from "../store/watchList";
import AddSubscription from "./AddSubscription";

const AllMembers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllMembers());
    dispatch(getList());
  }, [dispatch]);

  const members = useSelector(selectAllMembers);
  const subscriptions = useSelector(selectAllWatchList);

  const [addButton, setAddButton] = useState(-1);

  const onEditMember = (id) => {
    dispatch(memberIdActions.editId(id));
    let chosenMember = {};
    for (const member of members) {
      if (member._id === id) {
        chosenMember = member;
      }
    }
    console.log(chosenMember);
    dispatch({ type: "onChangeName", payload: chosenMember.name });
    dispatch({ type: "onChangeEmail", payload: chosenMember.email });
    dispatch({ type: "onChangeCity", payload: chosenMember.city });

    navigate("/editmember");
  };

  const onClickAddButton = (index) => {
    setAddButton(index);
  };

  return (
    <div>
      {members.map((member, index) => {
        return (
          <Card
            style={{
              maxWidth: "25rem",
              marginBottom: "2rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            key={member._id}
          >
            <Title size="5">{member.name}</Title>
            <p>Email: {member.email}</p>
            <p>City: {member.city}</p>
            <Buttons>
              <Button
                onClick={() => {
                  onEditMember(member._id);
                }}
              >
                Edit
              </Button>
              <Button>Delete</Button>
            </Buttons>
            <Card>
              <Title size="6">Movies Watched</Title>
              <Button className="mb-3" onClick={() => onClickAddButton(index)}>
                Subscribe to a new movie{" "}
              </Button>
              {addButton === index ? <AddSubscription /> : null}
            </Card>
          </Card>
        );
      })}
    </div>
  );
};

export default AllMembers;

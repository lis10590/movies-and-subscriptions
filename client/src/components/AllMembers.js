import { useEffect, useState } from "react";
import { Card, Title, Buttons, Button, Box } from "react-bulma-companion";
import {
  getAllMembers,
  selectAllMembers,
  deleteOneMember,
} from "../store/members";
import { useSelector, useDispatch } from "react-redux";
import { memberIdActions } from "../store/memberId";
import { useNavigate, useLocation } from "react-router-dom";
import { getList, selectAllWatchList } from "../store/watchList";
import AddSubscription from "./AddSubscription";
import NavbarMembers from "./NavbarMembers";

const AllMembers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const members = useSelector(selectAllMembers);
  const subscriptions = useSelector(selectAllWatchList);
  const permissions = useSelector((state) => state.members.permissions);

  const comboArr = (members, subscriptions) => {
    let arr = [];
    for (const member of members) {
      for (const sub of subscriptions) {
        if (member._id === sub.member_id) {
          const obj = {
            ...member,
            movies: sub.movies,
            subId: sub._id,
          };
          arr.push(obj);
        }
      }
    }
    return arr;
  };

  useEffect(() => {
    dispatch(getAllMembers());
    dispatch(getList());
  }, [dispatch]);

  const [addButton, setAddButton] = useState(-1);

  const viewSubsCheck = () => {
    if (Object.keys(permissions).length !== 0) {
      for (const property in permissions) {
        if (
          property === "View Subscriptions" &&
          permissions[property] === false
        ) {
          return false;
        } else if (
          property === "View Subscriptions" &&
          permissions[property] === true
        ) {
          return true;
        }
      }
    }
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

  const onClickAddButton = (index, id) => {
    setAddButton(index);
    dispatch({ type: "onChangeId", payload: id });
  };

  const onDeleteMember = (id) => {
    dispatch(deleteOneMember(id));
  };

  return (
    <div>
      {location.pathname === "/allmembers" ? <NavbarMembers /> : null}
      {comboArr(members, subscriptions).map((member, index) => {
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
            <Buttons className="is-justify-content-center mt-4">
              <Button
                onClick={() => {
                  onEditMember(member._id);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  onDeleteMember(member._id);
                }}
              >
                Delete
              </Button>
            </Buttons>
            {viewSubsCheck() === true ? (
              <Card>
                <Title size="6">Movies Watched</Title>
                {createSubsCheck() === true ? (
                  <Button
                    className="mb-3"
                    onClick={() => onClickAddButton(index, member.subId)}
                  >
                    Subscribe to a new movie{" "}
                  </Button>
                ) : null}
                {addButton === index ? <AddSubscription /> : null}
                <Box className="is-flex is-justify-content-center">
                  <ul style={{ listStyleType: "disc" }}>
                    {member.movies.length > 0
                      ? member.movies.map((movie, index) => {
                          return (
                            <li key={index}>
                              {movie.movie},{movie.date}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </Box>
              </Card>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
};

export default AllMembers;

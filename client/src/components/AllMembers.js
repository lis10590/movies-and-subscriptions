import { useState } from "react";
import { Card, Title, Buttons, Button } from "react-bulma-companion";

const AllMembers = () => {
  const members = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      city: "Gwenborough",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      city: "Wisokyburgh",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      city: "McKenziehaven",
    },
  ];

  return (
    <div>
      {members.map((member) => {
        return (
          <Card
            style={{
              maxWidth: "25rem",
              marginBottom: "2rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            key={member.id}
          >
            <Title size="5">{member.name}</Title>
            <p>Email: {member.email}</p>
            <p>City: {member.city}</p>
            <Buttons>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Buttons>
          </Card>
        );
      })}
    </div>
  );
};

export default AllMembers;

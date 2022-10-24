import { Card, Title, Dropdown, Icon, Button } from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AddSubscription = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [title, setTitle] = useState("Movies");
  return (
    <Card>
      <Title size="5">Add a New Movie</Title>
      <div className="has-text-centered" style={{ minHeight: 250 }}>
        <Dropdown active>
          <Dropdown.Trigger>
            <Button aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Dropdown Button</span>
              <Icon size="small">
                <FontAwesomeIcon icon={faAngleDown} />
              </Icon>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu id="dropdown-menu" role="menu">
            <Dropdown.Content>
              <Dropdown.Item component="a">Dropdown item</Dropdown.Item>
              <Dropdown.Item component="a">Other dropdown item</Dropdown.Item>
              <Dropdown.Item component="a">Active dropdown item</Dropdown.Item>
              <Dropdown.Item component="a">Other dropdown item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item component="a">With Divider</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
        <input type="date" />
      </div>
    </Card>
  );
};

export default AddSubscription;

import { Tabs } from "react-bulma-companion";
import NavbarComp from "./NavbarComp";

const UsersPage = () => {
  return (
    <div>
      <NavbarComp />
      <Tabs>
        <Tabs.List className="is-large">
          <Tabs.ListItem active>
            <Tabs.Link>All Users</Tabs.Link>
          </Tabs.ListItem>
          <Tabs.ListItem>
            <Tabs.Link>Add User</Tabs.Link>
          </Tabs.ListItem>
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default UsersPage;

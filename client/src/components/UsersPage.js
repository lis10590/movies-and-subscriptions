import { Tabs } from "react-bulma-companion";
import NavbarComp from "./NavbarComp";
import { useState } from "react";
import AllUsers from "./AllUsers";
import AddUser from "./AddUser";

const UsersPage = () => {
  const [allUsersTab, setAllUsersTab] = useState(false);
  const [addUserTab, setAddUserTab] = useState(false);

  const allUsersTabHandler = () => {
    setAllUsersTab(true);
    setAddUserTab(false);
  };

  const addUserTabHandler = () => {
    setAddUserTab(true);
    setAllUsersTab(false);
  };

  return (
    <div>
      <NavbarComp />
      <Tabs>
        <Tabs.List className="is-large">
          <Tabs.ListItem
            onClick={allUsersTabHandler}
            active={allUsersTab ? true : false}
          >
            <Tabs.Link>All Users</Tabs.Link>
          </Tabs.ListItem>
          <Tabs.ListItem
            onClick={addUserTabHandler}
            active={addUserTab ? true : false}
          >
            <Tabs.Link>Add User</Tabs.Link>
          </Tabs.ListItem>
        </Tabs.List>
      </Tabs>
      {allUsersTab ? <AllUsers /> : <AddUser />}
    </div>
  );
};

export default UsersPage;

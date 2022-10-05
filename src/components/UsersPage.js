import { Tabs } from "react-bulma-companion";

const UsersPage = () => {
  return (
    <div>
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

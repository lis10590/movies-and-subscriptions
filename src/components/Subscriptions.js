import { Tabs } from "react-bulma-companion";
const Subscriptions = () => {
  return (
    <div>
      <Tabs>
        <Tabs.List className="is-large">
          <Tabs.ListItem active>
            <Tabs.Link>All Members</Tabs.Link>
          </Tabs.ListItem>
          <Tabs.ListItem>
            <Tabs.Link>Add Member</Tabs.Link>
          </Tabs.ListItem>
        </Tabs.List>
      </Tabs>
    </div>
  );
};

export default Subscriptions;

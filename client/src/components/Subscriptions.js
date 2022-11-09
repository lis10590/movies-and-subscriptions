import { useState } from "react";
import { Tabs } from "react-bulma-companion";
import NavbarComp from "./NavbarComp";
import AllMembers from "./AllMembers";
import AddMember from "./AddMember";
const Subscriptions = () => {
  const [allMembersTab, setAllMembersTab] = useState(true);
  const [addMemberTab, setAddMemberTab] = useState(false);

  const allMembersTabHandler = () => {
    setAllMembersTab(true);
    setAddMemberTab(false);
  };

  const AddMemberTabHandler = () => {
    setAddMemberTab(true);
    setAllMembersTab(false);
  };
  return (
    <div>
      <NavbarComp />
      <Tabs>
        <Tabs.List className="is-large">
          <Tabs.ListItem
            onClick={allMembersTabHandler}
            active={allMembersTab ? true : false}
          >
            <Tabs.Link>All Members</Tabs.Link>
          </Tabs.ListItem>
          <Tabs.ListItem
            onClick={AddMemberTabHandler}
            active={addMemberTab ? true : false}
          >
            <Tabs.Link>Add Member</Tabs.Link>
          </Tabs.ListItem>
        </Tabs.List>
      </Tabs>
      {allMembersTab ? <AllMembers /> : <AddMember />}
    </div>
  );
};

export default Subscriptions;

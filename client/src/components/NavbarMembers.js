import { Navbar } from "react-bulma-companion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reset } from "../store/auth";
import { useDispatch } from "react-redux";

const NavbarMembers = () => {
  const [allMembersTab, setAllMembersTab] = useState(false);
  const [addMemberTab, setAddMemberTab] = useState(false);
  const [mainMenuTab, setMainMenuTab] = useState(false);
  const [logoutTab, setLogoutTab] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allMembersTabHandler = () => {
    setAllMembersTab(true);
    setAddMemberTab(false);
    setMainMenuTab(false);
    setLogoutTab(false);
    navigate("/allmembers");
  };

  const AddMemberTabHandler = () => {
    setAddMemberTab(true);
    setAllMembersTab(false);
    setMainMenuTab(false);
    setLogoutTab(false);
    navigate("/addmember");
  };

  const mainMenuTabHandler = () => {
    setMainMenuTab(true);
    setAddMemberTab(false);
    setAllMembersTab(false);
    setLogoutTab(false);
    navigate("/mainpage");
  };

  const logoutTabHandler = () => {
    setLogoutTab(true);
    setMainMenuTab(false);
    setAddMemberTab(false);
    setAllMembersTab(false);
    sessionStorage.removeItem("token");
    dispatch(reset());
    navigate("/");
  };

  return (
    <Navbar className="mb-6">
      <Navbar.Menu>
        <Navbar.Start>
          <Navbar.Item
            tab
            onClick={allMembersTabHandler}
            active={allMembersTab ? true : false}
          >
            All Members
          </Navbar.Item>
          <Navbar.Item
            tab
            onClick={AddMemberTabHandler}
            active={addMemberTab ? true : false}
          >
            Add Member
          </Navbar.Item>
          <Navbar.Item
            tab
            onClick={mainMenuTabHandler}
            active={mainMenuTab ? true : false}
          >
            Back To Main Page
          </Navbar.Item>
          <Navbar.Item
            tab
            onClick={logoutTabHandler}
            active={logoutTab ? true : false}
          >
            Logout
          </Navbar.Item>
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  );
};

export default NavbarMembers;

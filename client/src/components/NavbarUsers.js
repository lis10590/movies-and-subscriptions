import { Navbar } from "react-bulma-companion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reset } from "../store/auth";
import { useDispatch } from "react-redux";

const NavbarUsers = () => {
  const [allUsersTab, setAllUsersTab] = useState(false);
  const [addUserTab, setAddUserTab] = useState(false);
  const [mainMenuTab, setMainMenuTab] = useState(false);
  const [logoutTab, setLogoutTab] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allUsersTabHandler = () => {
    setAllUsersTab(true);
    setAddUserTab(false);
    setMainMenuTab(false);
    setLogoutTab(false);
    navigate("/allusers");
  };

  const addUserTabHandler = () => {
    setAddUserTab(true);
    setAllUsersTab(false);
    setMainMenuTab(false);
    setLogoutTab(false);
    navigate("/adduser");
  };

  const mainMenuTabHandler = () => {
    setMainMenuTab(true);
    setAddUserTab(false);
    setAllUsersTab(false);
    setLogoutTab(false);
    navigate("/mainpage");
  };

  const logoutTabHandler = () => {
    setLogoutTab(true);
    setMainMenuTab(false);
    setAddUserTab(false);
    setAllUsersTab(false);
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
            onClick={allUsersTabHandler}
            active={allUsersTab ? true : false}
          >
            All Users
          </Navbar.Item>
          <Navbar.Item
            tab
            onClick={addUserTabHandler}
            active={addUserTab ? true : false}
          >
            Add User
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

export default NavbarUsers;

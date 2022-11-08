import { Navbar } from "react-bulma-companion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { reset } from "../store/auth";
import { useDispatch } from "react-redux";
const NavbarComp = () => {
  const [moviesTab, setMoviesTab] = useState(false);
  const [subscriptionsTab, setSubscriptionTab] = useState(false);
  const [usersmTab, setUsersmTab] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickMoviesTabHandler = () => {
    setMoviesTab(true);
    setSubscriptionTab(false);
    setUsersmTab(false);
    navigate("/movies");
  };

  const onClickSubscriptionsTabHandler = () => {
    setSubscriptionTab(true);
    setMoviesTab(false);
    setUsersmTab(false);
    navigate("/subscriptions");
  };

  const onClickUsermTabHandler = () => {
    setUsersmTab(true);
    setMoviesTab(false);
    setSubscriptionTab(false);
    navigate("/usersmanagement");
  };

  const onClickLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(reset());
    navigate("/");
  };
  return (
    <Navbar>
      <Navbar.Menu>
        <Navbar.Start>
          <Navbar.Item
            tab
            onClick={onClickMoviesTabHandler}
            active={moviesTab ? true : false}
          >
            Movies
          </Navbar.Item>
          <Navbar.Item
            tab
            onClick={onClickSubscriptionsTabHandler}
            active={subscriptionsTab ? true : false}
          >
            Subscriptions
          </Navbar.Item>
          <Navbar.Item
            tab
            onClick={onClickUsermTabHandler}
            active={usersmTab ? true : false}
          >
            Users Management
          </Navbar.Item>
          <Navbar.Item tab onClick={onClickLogout}>
            Logout
          </Navbar.Item>
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  );
};

export default NavbarComp;

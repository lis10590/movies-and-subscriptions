import { Navbar } from "react-bulma-companion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { reset } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectEditUser } from "../store/usersReducer";
import "../styles/navbarComp.css";

const NavbarComp = () => {
  const [moviesTab, setMoviesTab] = useState(false);
  const [subscriptionsTab, setSubscriptionTab] = useState(false);
  const [usersmTab, setUsersmTab] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(selectEditUser);

  const adminCheck = () => {
    if (user.user !== " ") {
      if (user.user === "Admin") {
        return true;
      } else {
        return false;
      }
    }
  };

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
    sessionStorage.removeItem("username");
    dispatch(reset());
    navigate("/");
  };

  const onClickMainPage = () => {
    navigate("/mainpage");
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

          {adminCheck() === true ? (
            <Navbar.Item
              tab
              onClick={onClickUsermTabHandler}
              active={usersmTab ? true : false}
            >
              Users Management
            </Navbar.Item>
          ) : null}
          {location.pathname !== "/mainpage" ? (
            <Navbar.Item tab onClick={onClickMainPage}>
              Back To Main Page
            </Navbar.Item>
          ) : null}
          <Navbar.Item tab onClick={onClickLogout}>
            Logout
          </Navbar.Item>
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  );
};

export default NavbarComp;

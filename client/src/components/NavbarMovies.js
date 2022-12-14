import { Navbar } from "react-bulma-companion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reset } from "../store/auth";
import { useDispatch } from "react-redux";

const NavbarMovies = () => {
  const [allMoviesTab, setAllMoviesTab] = useState(false);
  const [addMovieTab, setAddMovieTab] = useState(false);
  const [mainMenuTab, setMainMenuTab] = useState(false);
  const [logoutTab, setLogoutTab] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allMoviesTabHandler = () => {
    setAllMoviesTab(true);
    setAddMovieTab(false);
    setMainMenuTab(false);
    setLogoutTab(false);
    navigate("/allmovies");
  };

  const addMovieTabHandler = () => {
    setAddMovieTab(true);
    setAllMoviesTab(false);
    setMainMenuTab(false);
    setLogoutTab(false);
    navigate("/addmovie");
  };

  const mainMenuTabHandler = () => {
    setMainMenuTab(true);
    setAddMovieTab(false);
    setAllMoviesTab(false);
    setLogoutTab(false);
    navigate("/mainpage");
  };

  const logoutTabHandler = () => {
    setLogoutTab(true);
    setMainMenuTab(false);
    setAddMovieTab(false);
    setAllMoviesTab(false);
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
            onClick={allMoviesTabHandler}
            active={allMoviesTab ? true : false}
          >
            All Movies
          </Navbar.Item>
          <Navbar.Item
            tab
            onClick={addMovieTabHandler}
            active={addMovieTab ? true : false}
          >
            Add Movie
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

export default NavbarMovies;

import { Navbar } from "react-bulma-companion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarMovies = () => {
  const [allMoviesTab, setAllMoviesTab] = useState(false);
  const [addMovieTab, setAddMovieTab] = useState(false);

  const navigate = useNavigate();

  const allMoviesTabHandler = () => {
    setAllMoviesTab(true);
    setAddMovieTab(false);
    navigate("/allmovies");
  };

  const addMovieTabHandler = () => {
    setAddMovieTab(true);
    setAllMoviesTab(false);
    navigate("/addmovie");
  };

  return (
    <Navbar>
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
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  );
};

export default NavbarMovies;

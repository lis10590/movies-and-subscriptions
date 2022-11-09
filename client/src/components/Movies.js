import { useState } from "react";
import { Tabs } from "react-bulma-companion";
import AddMovie from "./AddMovie";
import AllMovies from "./AllMovies";
import NavbarComp from "./NavbarComp";
import { useNavigate } from "react-router-dom";
import NavbarMovies from "./NavbarMovies";
const Movies = () => {
  const [allMoviesTab, setAllMoviesTab] = useState(true);
  const [addMovieTab, setAddMovieTab] = useState(false);
  const navigate = useNavigate();

  const allMoviesTabHandler = () => {
    setAllMoviesTab(true);
    setAddMovieTab(false);
    // navigate("/allmovies");
  };

  const addMovieTabHandler = () => {
    setAddMovieTab(true);
    setAllMoviesTab(false);
    // navigate("/addmovie");
  };
  return (
    <div>
      <NavbarComp />
      {/* <NavbarMovies /> */}
      <Tabs>
        <Tabs.List className="is-large">
          <Tabs.ListItem
            onClick={allMoviesTabHandler}
            active={allMoviesTab ? true : false}
          >
            <Tabs.Link>All Movies</Tabs.Link>
          </Tabs.ListItem>
          <Tabs.ListItem
            onClick={addMovieTabHandler}
            active={addMovieTab ? true : false}
          >
            <Tabs.Link>Add Movie</Tabs.Link>
          </Tabs.ListItem>
        </Tabs.List>
      </Tabs>

      {allMoviesTab ? <AllMovies /> : <AddMovie />}
    </div>
  );
};

export default Movies;

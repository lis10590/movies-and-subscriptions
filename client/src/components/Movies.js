import { useState } from "react";
import { Tabs } from "react-bulma-companion";
import AddMovie from "./AddMovie";
import AllMovies from "./AllMovies";
import NavbarComp from "./NavbarComp";
const Movies = () => {
  const [allMoviesTab, setAllMoviesTab] = useState(false);
  const [addMovieTab, setAddMovieTab] = useState(false);

  const allMoviesTabHandler = () => {
    setAllMoviesTab(true);
    setAddMovieTab(false);
  };

  const addMovieTabHandler = () => {
    setAddMovieTab(true);
    setAllMoviesTab(false);
  };
  return (
    <div>
      <NavbarComp />
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

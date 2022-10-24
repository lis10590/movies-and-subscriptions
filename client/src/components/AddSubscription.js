import { Card, Title, Dropdown, Icon, Button } from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies, selectAllMovies } from "../store/movies";

const AddSubscription = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const movies = useSelector(selectAllMovies);

  const [openMenu, setOpenMenu] = useState(false);
  const [title, setTitle] = useState("Movies");
  const [selectedMovie, setSelectedMovie] = useState("");

  const onClickDropdown = () => {
    setOpenMenu(!openMenu);
  };

  const titleHandler = (e) => {
    setTitle(e.target.innerHTML);
    setSelectedMovie(e.target.innerHTML);
    setOpenMenu(false);
  };

  const onSubscribeClick = (id) => {
    const obj = {
      _id: id,
      movie: selectedMovie,
    };
  };

  return (
    <Card>
      <Title size="5">Add a New Movie</Title>
      <div className="has-text-centered" style={{ minHeight: 250 }}>
        <Dropdown className="mr-3" active={openMenu}>
          <Dropdown.Trigger>
            <Button
              onClick={onClickDropdown}
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>{title}</span>
              <Icon size="small">
                <FontAwesomeIcon icon={faAngleDown} />
              </Icon>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu id="dropdown-menu" role="menu">
            <Dropdown.Content>
              {movies.map((movie) => {
                return (
                  <Dropdown.Item
                    key={movie._id}
                    component="a"
                    onClick={titleHandler}
                  >
                    {movie.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
        <input type="date" />
        <div>
          <Button className="mt-4">Subscribe</Button>
        </div>
      </div>
    </Card>
  );
};

export default AddSubscription;

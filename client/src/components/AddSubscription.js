import { Card, Title, Dropdown, Icon, Button } from "react-bulma-companion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies, selectAllMovies } from "../store/movies";
import { watchListAddition, getList } from "../store/watchList";
import { selectSubscription } from "../store/subscriptionReducer";

const AddSubscription = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getList());
  }, [dispatch]);

  const movies = useSelector(selectAllMovies);
  const subscription = useSelector(selectSubscription);

  const [openMenu, setOpenMenu] = useState(false);
  const [title, setTitle] = useState("Movies");

  const onClickDropdown = () => {
    setOpenMenu(!openMenu);
  };

  const titleHandler = (e) => {
    setTitle(e.target.innerHTML);
    dispatch({ type: "onChangeMovie", payload: e.target.innerHTML });
    setOpenMenu(false);
  };

  const dateHandler = (e) => {
    dispatch({ type: "onChangeDate", payload: e.target.value });
  };

  const onSubscribeClick = () => {
    const obj = {
      _id: subscription.id,
      movie: subscription.movie,
      date: subscription.date,
    };
    console.log(obj);
    dispatch(watchListAddition(obj));
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
        <input type="date" onChange={dateHandler} />
        <div>
          <Button className="mt-4" onClick={onSubscribeClick}>
            Subscribe
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AddSubscription;

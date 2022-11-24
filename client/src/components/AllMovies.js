import { useState, useEffect } from "react";
import {
  Card,
  Title,
  Buttons,
  Button,
  Field,
  Input,
} from "react-bulma-companion";
import EditMovie from "./EditMovie";
import { getAllMovies, selectAllMovies, deleteOneMovie } from "../store/movies";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { movieIdActions } from "../store/movieId";
import { getList, selectAllWatchList } from "../store/watchList";
import { getAllMembers, selectAllMembers } from "../store/members";
import NavbarMovies from "./NavbarMovies";
import FlipCard from "./FlipCard";

const AllMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getList());
    dispatch(getAllMembers());
    viewMoviesCheck();
    updateMoviesCheck();
  }, [dispatch]);

  const movies = useSelector(selectAllMovies);
  const watchList = useSelector(selectAllWatchList);
  const members = useSelector(selectAllMembers);
  const permissions = useSelector((state) => state.movies.moviesPermissions);

  const [queryInput, setQueryInput] = useState("");

  const viewMoviesCheck = () => {
    if (Object.keys(permissions).length !== 0) {
      for (const property in permissions) {
        if (property === "View Movies" && permissions[property] === false) {
          return false;
        } else if (
          property === "View Movies" &&
          permissions[property] === true
        ) {
          return true;
        }
      }
    }
  };

  const updateMoviesCheck = () => {
    if (Object.keys(permissions).length !== 0) {
      for (const property in permissions) {
        if (property === "Update Movies" && permissions[property] === false) {
          return false;
        } else if (
          property === "Update Movies" &&
          permissions[property] === true
        ) {
          return true;
        }
      }
    }
  };

  const deleteMoviesCheck = () => {
    if (Object.keys(permissions).length !== 0) {
      for (const property in permissions) {
        if (property === "Delete Movies" && permissions[property] === false) {
          return false;
        } else if (
          property === "Delete Movies" &&
          permissions[property] === true
        ) {
          return true;
        }
      }
    }
  };

  const viewSubsCheck = () => {
    if (Object.keys(permissions).length !== 0) {
      for (const property in permissions) {
        if (
          property === "View Subscriptions" &&
          permissions[property] === false
        ) {
          return false;
        } else if (
          property === "View Subscriptions" &&
          permissions[property] === true
        ) {
          return true;
        }
      }
    }
  };

  const onEditClickHandler = (id) => {
    dispatch(movieIdActions.editId(id));
    let chosenMovie = {};
    for (const movie of movies) {
      if (movie._id === id) {
        chosenMovie = movie;
      }
    }

    dispatch({ type: "onChangeMovieName", payload: chosenMovie.name });
    dispatch({ type: "onChangeGenres", payload: chosenMovie.genres });
    dispatch({ type: "onChangeImage", payload: chosenMovie.image.medium });
    dispatch({ type: "onChangePremiered", payload: chosenMovie.premiered });

    navigate("/editmovie");
  };

  const search = (e) => {
    setQueryInput(e.target.value);
  };

  const findSubscriptions = (watchList, movieName) => {
    let arr = [];
    let membersArr = [];
    for (const item of watchList) {
      for (const movie of item.movies) {
        if (movieName === movie.movie) {
          const obj = {
            id: item.member_id,
            date: movie.date,
          };
          arr.push(obj);
        }
      }
    }

    for (const item of arr) {
      for (const member of members) {
        if (item.id === member._id) {
          const str = member.name + "," + item.date;
          membersArr.push(str);
        }
      }
    }

    return membersArr;
  };

  const onDeleteMovie = (id) => {
    dispatch(deleteOneMovie(id));
  };

  return (
    <div>
      {location.pathname === "/allmovies" ? <NavbarMovies /> : null}
      {viewMoviesCheck() === true ? (
        <div>
          <Field>
            Find Movie
            <Input
              name="findMovie"
              type="text"
              onChange={search}
              style={{ maxWidth: "20rem" }}
              className="ml-2 mr-2"
            />
            <Button>Find</Button>
          </Field>
          <Title>All Movies</Title>

          {movies.length !== 0
            ? movies
                .filter((item) => item.name.toLowerCase().includes(queryInput))
                .map((movie) => {
                  return (
                    <FlipCard
                      front={
                        <div>
                          <Title size="5">
                            {movie.name},{movie.premiered.split("-")[0]}
                          </Title>
                          <div style={{ display: "flex" }}>
                            <img
                              style={{
                                // maxWidth: "70%",
                                marginLeft: "15px",
                                marginRight: "15px",
                              }}
                              alt="movie"
                              src={movie.image.medium}
                            />
                          </div>
                        </div>
                      }
                      back={
                        <div>
                          <h3>
                            Genres:
                            {movie.genres.map((genre, index) => {
                              return (
                                <span key={index}>
                                  "{genre}"
                                  {index === movie.genres.length - 1
                                    ? null
                                    : ","}
                                </span>
                              );
                            })}
                          </h3>
                          {viewSubsCheck() === true ? (
                            <div>
                              <Title size="6">Subscriptions Watched</Title>
                              <ul
                                style={{
                                  listStyle: "disc",
                                  marginLeft: "20px",
                                }}
                              >
                                {findSubscriptions(watchList, movie.name).map(
                                  (item, index) => {
                                    return <li key={index}>{item}</li>;
                                  }
                                )}
                              </ul>
                            </div>
                          ) : null}
                          <Buttons className="is-justify-content-center mt-4">
                            {updateMoviesCheck() === true ? (
                              <Button
                                onClick={() => onEditClickHandler(movie._id)}
                              >
                                Edit
                              </Button>
                            ) : null}
                            {deleteMoviesCheck() === true ? (
                              <Button
                                onClick={() => {
                                  onDeleteMovie(movie._id);
                                }}
                              >
                                Delete
                              </Button>
                            ) : null}
                          </Buttons>
                        </div>
                      }
                    />
                  );
                  // return (
                  //   <Card
                  //     style={{
                  //       maxWidth: "30rem",
                  //       marginBottom: "2rem",
                  //       marginLeft: "auto",
                  //       marginRight: "auto",
                  //     }}
                  //     key={movie._id}
                  //   >
                  //     <Title size="5">
                  //       {movie.name},{movie.premiered.split("-")[0]}
                  //     </Title>
                  //     <h3>
                  //       Genres:
                  //       {movie.genres.map((genre, index) => {
                  //         return (
                  //           <span key={index}>
                  //             "{genre}"
                  //             {index === movie.genres.length - 1 ? null : ","}
                  //           </span>
                  //         );
                  //       })}
                  //     </h3>
                  //     <div style={{ display: "flex" }}>
                  //       <img
                  //         style={{
                  //           maxWidth: "50%",
                  //           marginLeft: "15px",
                  //           marginRight: "15px",
                  //         }}
                  //         alt="movie"
                  //         src={movie.image.medium}
                  //       />
                  //       {viewSubsCheck() === true ? (
                  //         <div>
                  //           <Title size="6">Subscriptions Watched</Title>
                  //           <ul
                  //             style={{ listStyle: "disc", marginLeft: "20px" }}
                  //           >
                  //             {findSubscriptions(watchList, movie.name).map(
                  //               (item, index) => {
                  //                 return <li key={index}>{item}</li>;
                  //               }
                  //             )}
                  //           </ul>
                  //         </div>
                  //       ) : null}
                  //     </div>
                  //     <Buttons className="is-justify-content-center mt-4">
                  //       {updateMoviesCheck() === true ? (
                  //         <Button onClick={() => onEditClickHandler(movie._id)}>
                  //           Edit
                  //         </Button>
                  //       ) : null}
                  //       {deleteMoviesCheck() === true ? (
                  //         <Button
                  //           onClick={() => {
                  //             onDeleteMovie(movie._id);
                  //           }}
                  //         >
                  //           Delete
                  //         </Button>
                  //       ) : null}
                  //     </Buttons>
                  //   </Card>
                  // );
                })
            : null}
          {true ? null : <EditMovie />}
        </div>
      ) : (
        <div>You are not Authorized!</div>
      )}
    </div>
  );
};

export default AllMovies;

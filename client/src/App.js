import "./App.css";
import "bulma/css/bulma.min.css";
import { Route, Routes, redirect, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import UsersPage from "./components/UsersPage";
import Movies from "./components/Movies";
import Subscriptions from "./components/Subscriptions";
import AllMovies from "./components/AllMovies";
import EditMovie from "./components/EditMovie";
import AllMembers from "./components/AllMembers";
import EditMember from "./components/EditMember";
import AddMovie from "./components/AddMovie";
import EditUser from "./components/EditUser";
import MainPage from "./components/MainPage";
import AllUsers from "./components/AllUsers";
import AddMember from "./components/AddMember";
import AddUser from "./components/AddUser";

function App() {
  const token = sessionStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
        <Route path="/usersmanagement" element={<UsersPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/allmovies" element={<AllMovies />} />
        <Route path="/editmovie" element={<EditMovie />} />
        <Route path="/allmembers" element={<AllMembers />} />
        <Route path="/editmember" element={<EditMember />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route
          path="/mainpage"
          element={token ? <MainPage /> : <Navigate to="/" />}
        />
        <Route path="allusers" element={<AllUsers />} />
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;

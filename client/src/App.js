import "./App.css";
import "bulma/css/bulma.min.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import UsersPage from "./components/UsersPage";
import Movies from "./components/Movies";
import Subscriptions from "./components/Subscriptions";
import AllMovies from "./components/AllMovies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />
        <Route path="/usersmanagement" element={<UsersPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/allmovies" element={<AllMovies />} />
      </Routes>
    </div>
  );
}

export default App;

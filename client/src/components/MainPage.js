import NavbarComp from "./NavbarComp";
import { Title, Image } from "react-bulma-companion";
import movieImg from "../assets/movie.png";
import { useSelector } from "react-redux";

const MainPage = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <div>
      {token !== undefined && token !== "" ? (
        <div>
          <NavbarComp />
          <Title style={{ fontFamily: "Alkalami, serif" }}>Main Page</Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image style={{ maxWidth: "240px" }}>
              <Image.Content src={movieImg} />
            </Image>
          </div>
        </div>
      ) : (
        <p>Not Authorized!</p>
      )}
    </div>
  );
};

export default MainPage;

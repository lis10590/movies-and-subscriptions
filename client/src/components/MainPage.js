import NavbarComp from "./NavbarComp";
import { Title, Image } from "react-bulma-companion";
import movieImg from "../assets/movie.png";

const MainPage = () => {
  return (
    <div>
      <NavbarComp />
      <Title style={{ fontFamily: "Alkalami, serif" }}>Main Page</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image style={{ maxWidth: "240px" }}>
          <Image.Content src={movieImg} />
        </Image>
      </div>
    </div>
  );
};

export default MainPage;

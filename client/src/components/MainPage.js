import NavbarComp from "./NavbarComp";
import { Title, Image } from "react-bulma-companion";
import movieImg from "../assets/movie.png";
import { useSelector } from "react-redux";
import glasses from "../assets/3d-glasses.png";

const MainPage = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const tokenDetails = useSelector((state) => state.users.tokenDetails);
  console.log(tokenDetails);

  const username = sessionStorage.getItem("username");
  return (
    <div>
      <NavbarComp />
      <Title size="1" style={{ fontFamily: "Alkalami, serif" }}>
        Main Page
      </Title>
      <img src={glasses} style={{ width: "5rem" }}></img>
      <Title style={{ fontFamily: "Alkalami, serif" }}>
        Welcome {username}
      </Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image style={{ maxWidth: "240px" }}>
          <Image.Content src={movieImg} />
        </Image>
      </div>
    </div>
  );
};

export default MainPage;

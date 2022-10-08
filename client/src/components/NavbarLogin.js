import { Navbar, Buttons, Button } from "react-bulma-companion";
import { Link } from "react-router-dom";
const NavbarLogin = () => {
  return (
    <Navbar>
      <Navbar.Menu>
        <Navbar.End>
          <Navbar.Item>
            <Buttons>
              <Button color="primary" component={Link} to="/createaccount">
                <strong>Create Account</strong>
              </Button>
              <Button color="light" component={Link} to="/">
                Login
              </Button>
            </Buttons>
          </Navbar.Item>
        </Navbar.End>
      </Navbar.Menu>
    </Navbar>
  );
};

export default NavbarLogin;

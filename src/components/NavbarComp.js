import { Navbar, Buttons, Button } from "react-bulma-companion";
import { Link } from "react-router-dom";
const NavbarComp = () => {
  return (
    <Navbar>
      <Navbar.Menu>
        <Navbar.Start>
          <Navbar.Item tab active>
            Movies
          </Navbar.Item>
          <Navbar.Item tab>Subscriptions</Navbar.Item>
          <Navbar.Item tab>Users Management</Navbar.Item>
          <Navbar.Item tab>Logout</Navbar.Item>
        </Navbar.Start>
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

export default NavbarComp;

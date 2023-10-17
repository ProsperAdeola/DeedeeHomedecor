import style from "./navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className={style.navbar}>
      <Navbar className={style.nav } expand="lg">
        <Container>
          <img className={style.logo} src="./images/lg.png" alt="" />
          <Navbar.Toggle
            className={style.toggle}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse className={style.collapse}>
            <Nav className={`  ${style.ul}`}>
              <Link to="/" className={style.li} style={{ color: "white" }}>
                Home
              </Link>
              <Link
                to="/service"
                className={style.li}
                style={{ color: "white" }}
              >
                Service
              </Link>
              <Link to="/about" className={style.li} style={{ color: "white" }}>
                About us
              </Link>
              <Link
                to="/contact"
                className={style.li}
                style={{ color: "white" }}
              >
                Contact us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;

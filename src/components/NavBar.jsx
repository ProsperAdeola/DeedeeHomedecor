import style from "./navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"

const Navbar1 = () => {
  return (
    <div className={style.navbar}>

<Navbar className={style.nav} >
        <Container className={style.Container}>
          <img className={style.logo}src="./images/logo.png" alt="" />
          <Nav className={`  ${style.ul}`}  >
            <Link to='/' className={style.li} style={{color:"white"}}>Home</Link>
            <Link to='/service' className={style.li} style={{color:"white"}}>Service</Link>
            <Link to='/about'className={style.li} style={{color:"white"}}>About us</Link>
            <Link to='/contact'className={style.li} style={{color:"white"}}>Contact us</Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
  );
};

export default Navbar1;

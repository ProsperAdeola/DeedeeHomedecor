import React from "react";
import style from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.foot}>
      <Row>
        <Col className={style.list}>
          <div className={style.body}>
            <div>
              {" "}
              <Link to="/" className={style.btn}>
                DEEDEE HOMEDECOR
              </Link>
            </div>
            <div>
              <Link to="/about" className={style.btn}>
                ABOUT US
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/service" className={style.btn}>
                SERVICE
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/contact" className={style.btn}>
                CONTACT US
              </Link>
            </div>
          </div>
        </Col>

        <Col className={style.col}>
          <Link to="/contact" className={style.btn}>
            CONTACT US
          </Link>
          <p className={style.text}>+2348160578035</p>
          <p className={style.text}>deedeehomedecor@gmail.com</p>
          <div>
            <button className={style.icon}>
              {" "}
              <FaInstagram color="white" />
            </button>
            <button className={style.icon}>
              {" "}
              <FaFacebook color="white" />
            </button>
            <button className={style.icon}>
              {" "}
              <FaWhatsapp color="white" />
            </button>
            <button className={style.icon}>
              {" "}
              <FaTwitter color="white" />
            </button>
          </div>
        </Col>

        <Col className={style.col}>
          <button className={style.btn}>LOCATION</button>
          <p>Plot 10,Segadot Filling Station,Oba ile, Akure, Ondo State.</p>
        </Col>
      </Row>
      <p className={style.right}>Copyright @ 2023 Deedee HomeDecor Nigeria</p>
    </div>
  );
};
export default Footer;

import Navbar1 from "../components/NavBar";
import style from "./contact.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Footer from "../components/footer";
import Button from "../components/Button";
import { FaInbox, FaLocationArrow, FaPhone, } from "react-icons/fa";

const Contact = (name) => {
  return (
    <div>
      <div>
        <h1 className={style.discount}>
          30% discount for our first time clients
        </h1>
      </div>
      <Navbar1 />

      <div className={style.heros}>
        <div className={style.conth} style={{ background: "black" }}>
          <img className={style.cont} src="./images/contact.jpg" alt="" />
        </div>
        <div className={style.contxt}>
          <h1>Love begins at home</h1>
          <p>
            ...and it is not how much we do, but how much love we put in action
          </p>
        </div>
      </div>

      <div className={style.c}>
        <h1 className={style.contheading}> To contact us</h1>
        <div className={style.container}>
          <div>
            <h1  className={style.contheading1}>Have a Question?</h1>
            <p className={style.contp}>
              Are you looking to asking us questions and make an enquires, our
              customer service representatives are always available to answer
              your questions</p>
              <div className={style.in}>
              <p><button className={style.icn}>
                  <FaInbox color="#500472" />
              </button>deedeehomedecor@gmail.com</p>
              <p><button className={style.icn}>
                  <FaPhone  color="#500472" />
              </button>+2348160578035</p>
             <p> <button className={style.icn}>
                  <FaLocationArrow  color="#500472" />
              </button>Plot 10,Segadot Filling Station,Oba ile, Akure, Ondo State</p>
                
              </div>
          </div>
          <div className={style.con}>
            <h3 className={style.formheading}>
              You have a question? Fill in the form
            </h3>
            <Form className={style.contform}>
              <Row className={style.controw}>
                <Form.Group className={style.contgroup}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control className={style.contS} type="text" />
                </Form.Group>
                <Form.Group className={style.contgroup}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control className={style.contS} type="text" />
                </Form.Group>

                <Form.Group className={style.contgroup}>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control className={style.contS1} type="text" />
                </Form.Group>
                <Button className={style.abtbtn} name="Submit" />
              </Row>
            </Form>
          </div>
        </div>
      </div>

      <div className={style.enq}>
        <h2 className={style.enquires}>For More Enquires:</h2>
        <div className={style.enqicons}>
        <a href="https://twitter.com/login"> <img className={style.icons} src="./images/twitter.png" alt="" /></a>
        <a href="https://www.whatsapp.com/join"> <img className={style.icons} src="./images/whatsapp.png" alt="" /></a>
        <a href="https://m.facebook.com/login"> <img className={style.icons} src="./images/facebook.png" alt="" /></a>
        <a href="https://www.instagram.com/accounts/login/"> <img className={style.icons} src="./images/instagram.png" alt="" /></a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

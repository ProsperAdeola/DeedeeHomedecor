import style from "./Home.module.css";
import Navbar from "../components/NavBar";
import Carousel from "react-bootstrap/Carousel";
import Slide from "../components/Slider";
import Footer from "../components/footer";
import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className={style.discount}>
          30% discount for our first time clients
        </h1>
      </div>
      <Navbar />
      <Slide />

      <div className={style.text}>
        <h1 className={style.happen}>What we do in DeeDee Home Decor?</h1>
        <p className={style.us}>
          Home decor is short of home decoration and it encompassses everything
          that makes your come condusive, homely, and beautiful. This items
          ranges from furniture, art, plants and accessories. In DEEDEE HOME
          DECOR we make it our responsibility to bring beauty to you home, with
          pop of colors and other accessories.<br></br> When it comes to
          beautifying homes, DEEDEE has been offering the services with putting
          the choice of our client to heart for 5 years. we are dedicated to
          giving you the best at all times!
        </p>
      </div>

      <div className={style.past}>
        <h1 className={style.discount}>Our past projects</h1>
        <div className={style.container}>
          <div className={style.li}>
            {/* <div className={style.card}>
              <img className={style.image} src="./images/1.jpg" alt="" />
              <h1 className={style.litext}>Bedroom</h1>
            </div> */}
            <div>
              <img className={style.image} src="./images/1.webp" alt="" />
            </div>
            <div className={style.card}>
              <img className={style.image} src="./images/2.jpg" alt="" />
              <h1 className={style.litext}>Waiting Area</h1>
            </div>
            <div className={style.card}>
              <img className={style.image} src="./images/3.jpg" alt="" />
              <h1 className={style.litext}>Living Room</h1>
            </div>
          </div>

          <div className={style.li}>
            <div className={style.card}>
              <img className={style.image} src="./images/4.jpg" alt="" />
              <h1 className={style.litext}>Kitchen</h1>
            </div>
            <div className={style.card}>
              <img className={style.image} src="./images/5.jpg" alt="" />
              <h1 className={style.litext}>Kitchen</h1>
            </div>
            <div className={style.card}>
              <img className={style.image} src="./images/6.jpg" alt="" />
              <h1 className={style.litext}>Breakfast Table</h1>
            </div>
          </div>

          <div className={style.li}>
            <div className={style.card}>
              <img className={style.image} src="./images/7.jpg" alt="" />
              <h1 className={style.litext}>Sitting Room</h1>
            </div>
            <div className={style.card}>
              <img className={style.image} src="./images/8.jpg" alt="" />
              <h1 className={style.litext}>Dinning Room</h1>
            </div>
            <div className={style.card}>
              <img className={style.image} src="./images/contact.jpg" alt="" />
              <h1 className={style.litext}>Sitting Area</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={style.conts}>
        <h1 className={style.ts}>Testimonals</h1>

        <Carousel className={style.tsp} indicators={false} controls={false}>
          <Carousel.Item className={style.tspbox}>
            <p className={style.tsptext}>
              I would recommend deedee home decor for anyone trying to beautify
              their home. They saved me from stressing myself to think of the
              style to decide your home!
              <div className={style.icn2}>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
              </div>
            </p>
          </Carousel.Item>
          <Carousel.Item className={style.tspbox}>
            <p className={style.tsptext}>
              If you are looking to give your home a nice touch, and you don't
              have deedee home decor as your go to. I highly recommend that you
              check them out.
              <div className={style.icn2}>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
              </div>
            </p>
          </Carousel.Item>
          <Carousel.Item className={style.tspbox}>
            <p className={style.tsptext}>
              I love deedee home decor! This is an amazing service and they
              saved me from going through the stress of decorating my home. I
              plan to use them for a long time to come.
              <div className={style.icn2}>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
              </div>
            </p>
          </Carousel.Item>
          <Carousel.Item  className={style.tspbox}>
            <p className={style.tsptext}>
              With deedee home decor, communication between us is far more
              efficient. A game changer.
              <div className={style.icn2}>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
              </div>
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className={style.tsptext}>
              Would definitely recommend deedee home decor and will definitely
              refer them to my friends.
              <div className={style.icn2}>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
              </div>
            </p>
          </Carousel.Item>
          <Carousel.Item className={style.tspbox}>
            <p className={style.tsptext}>
              We are always on the same page. I'm not very organized naturally,
              so deedee home decor company is a godsent!
              <div className={style.icn2}>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
                <button className={style.icn}>
                  <FaStar color="#500472" />
                </button>
              </div>
            </p>
          </Carousel.Item>
        </Carousel>
      </div>

      <Footer />
    </div>
  );
};
export default Home;

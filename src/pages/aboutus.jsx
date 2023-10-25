import React from "react";
import Navbar from "../components/NavBar";
import style from "./aboutus.module.css";
import Footer from "../components/footer";

const Aboutus = () => {
  return (
    <div>
      <div>
        <h1 className={style.discount}>
          30% discount for our first time clients
        </h1>
      </div>
      <Navbar />

      <div className={style.heros}>
        <div className={style.absh} style={{ background: "black" }}>
          <img className={style.aboutushero} src="./images/2.jpg" alt="" />
        </div>
        <div className={style.aboutustext}>
          <h1>Decorate your Home</h1>
          <p>
            It can be very tempting to decorate your home
            based on what you think will be appealing to others. <br></br>How often do we
            choose colors and styles and artwork with someone else’s voice in
            the back of our mind, drowning out our own preferences?
          </p>
        </div>
      </div>

      <div>
        <div className={style.abt}>
          <h1 className={style.aboutusheading}>About Us</h1>
          <p className={style.aboutusparagraph}>
            DeeDee Home Decor is a company where we help our clients bring
            beauty to their homes using difgfernt items, ranging from furniture,
            artwork and other accessories.<br></br> We love sharing our passion
            for decorating, it allows us to find unique decorating items, put it
            together and bring it your space to make your home homely.<br></br>
            We help you curate a selection of home decoration to help you crate
            spaces in your home that are unique, stylish, and personalized to
            you. we believe there is no rules when it come to decorating your
            home. Our team will help you bring our spaces to life with our
            services.<br></br>Our experienced team come up with designs that
            matches your idea you and allow you to pick the one that best soothe
            you.
          </p>
        </div>
        <div className={style.break}>
          <hr></hr>
        </div>
        <div>
          <div>
            <h1 className={style.aboutusheading}>
              Meet some of our Team Members
            </h1>

            <div className={style.staff}>
              <div>
                <img className={style.staffimage} src="./images/a.jpg" alt="" />
                <p className={style.stafftext}>Creative Director</p>
              </div>
              <div>
                <img className={style.staffimage} src="./images/b.jpg" alt="" />
                <p className={style.stafftext}>Lead Designer</p>
              </div>
            </div>

            <div className={style.staff}>
              <div>
                <img className={style.staffimage} src="./images/c.jpg" alt="" />
                <p className={style.stafftext}>Designer</p>
              </div>
              <div>
                <img className={style.staffimage} src="./images/d.jpg" alt="" />
                <p className={style.stafftext}>Project Manager</p>
              </div>
            </div>

            <div className={style.staff1}>
              <div>
                <img
                  className={style.staffimage1}src="./images/e.jpg"alt=""/>
                <p className={style.stafftext}>Design Coordinator</p>
              </div>
              <div>
                <img
                  className={style.staffimage1}src="./images/h.jpg"alt=""/>
                <p className={style.stafftext}>
                  Customer Service Representative
                </p>
              </div>
              <div>
                <img
                  className={style.staffimage1}src="./images/g.jpg"alt=""/>
                <p className={style.stafftext}>Administrative Assistants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;

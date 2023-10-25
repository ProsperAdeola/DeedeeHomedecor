import Button1 from "../components/Button";
import Navbar from "../components/NavBar";
import style from "./Service.module.css";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Service = (name) => {
  return (
    <div>
      <div>
        <h1 className={style.discount}>
          30% discount for our first time clients
        </h1>
      </div>
      <Navbar />
      <div className={style.heros}>
        <div className={style.hero} style={{ background: "black" }}>
          <img className={style.heropic} src="./images/1.jpg" alt="" />
        </div>
        <div className={style.txt}>
          <h1 className={style.ccp}><b>Your home is your safe haven</b></h1>
          <p className={style.cp}>
            ...add elements that will calm your space and soothe your soul
            <br></br> One of the most important
            things to keep in mind while decorating is that your home is about
            you.<br></br> You are the one that needs to be comfortable there. You are the
            one that needs to look at the color of the walls and stare at the
            painting above the mantle every day.
          </p>
        </div>
      </div>

      <div className={style.so}>
        <h1 className={style.offer}>What we offer</h1>

        <div className={style.paint}>
          <div className={style.p}>
            <h2 className={style.pt}>Painting</h2>
            <p className={style.pp}>
              Painting designs create te right ambiance and positive environment
              in your house and set the mood for spennding family time. You can
              chose your panting from bright to colourful to cool. there ia s
              colour palette of colors you can always choose from and we can
              also guide you through.<br></br>As our client you can opt for
              customised textures and wall painting ideas by your home type.
              <br></br> Click on the button below to talk to our customer
              representative.
            </p>
            <div className={style.btns}>
              <Link to="/contact">
                <Button1 name="Learn more..." className={style.btn} />
              </Link>
            </div>
          </div>
          <div>
            <img className={style.pi} src="./images/p1.jpg" alt="" />
          </div>
        </div>

        <div className={style.paint}>
          <div>
            <img className={style.pi} src="./images/curtain.jpg" alt="" />
          </div>
          <div className={style.p}>
            <h2 className={style.pt}>Curtains</h2>
            <p className={style.pp}>
              Curtains provide your home with a modern look and it is brings
              luxury to your home.<br></br>Take control over briht sunlight with
              curtains. The right choice of curtains can add a way of class to
              your home that will set the tone of the place.<br></br>Are you not
              sure of the type of curtain you want or fabrics, click on the
              utton below to talk to our customer care representative.
            </p>
            <div className={style.btns}>
              <Link to="/contact">
                <Button1 name="Learn more..." />
              </Link>
            </div>
          </div>
        </div>

        <div className={style.paint}>
          <div className={style.p}>
            <h2 className={style.pt}>Full Deco</h2>
            <p className={style.pp}>
              Your home is your safe space, the asthetics brings a kind of
              fulliment and joy.<br></br>We will bring our home decor ideas to
              life and to your taste.<br></br>Click on the utton below to talk
              to our customer care representative.
            </p>
            <div className={style.btns}>
              <Link to="/contact">
                <Button1 name="Learn more..." />
              </Link>
            </div>
          </div>
          <div>
            <img className={style.pi} src="./images/4.jpg" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;

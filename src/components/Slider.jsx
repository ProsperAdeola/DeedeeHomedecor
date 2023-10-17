import c from "./slider.module.css";
import { Carousel } from "react-bootstrap";

const Slide = () => {
  return (
    // <>
    //   <div
    //     id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" className={c.carouselitem} style={{ background: "black" }}>
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         <img src="/images/slider 1.jpg" className={c.image} alt="..." />
    //       </div>

    //       <div class="carousel-item">
    //         <img src="/images/slider 2.jpg" className={c.image} alt="..." />
    //       </div>
          
    //       <div class="carousel-item">
    //         <img src="/images/slider 3.jpg" className={c.image} alt="..." />
    //       </div>
    //     </div>
    //     <button
    //       class="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleControls"
    //       data-bs-slide="prev"
    //     >
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       class="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleControls"
    //       data-bs-slide="next"
    //     >
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Next</span>
    //     </button>

    //     <div className={c.carouselcaption}>
    //           <h5 className={c.carouselcap}>First Slide</h5>
    //           <p className={c.carouselcap}>This is the first slide.</p>
    //         </div>
    //   </div>
    // </>


    <Carousel fade indicators={false}>
      <Carousel.Item className={c.carouselitem}>
      <img src="/images/slider 1.jpg" className={c.image} alt="..." />
        <Carousel.Caption className={c.carouselcap}>
          <h1 className={c.ccp}>Luxury, is not about buying expensive things; it’s about living in a way where you appreciate things.</h1>
          <p className={c.cp}>There are things you love, your home inclusive, and you want to make it uniquely for yourself.<br></br>Your home represents your life as you journey from one chapter to the next. As your life grows and develops, so should your home. While you learn more about yourself, your home should reflect that exploration. And as you mature in sophistication, the aesthetics of your home should likewise elevate, indicating the changes and developments within.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={c.carouselitem}>
      <img src="/images/slider 2.jpg" className={c.image} alt="..." />
        <Carousel.Caption className={c.carouselcap}>
          <h1 className={c.ccp} >Luxury, is not about buying expensive things; it’s about living in a way where you appreciate things.</h1>
          <p className={c.cp}>There are things you love, your home inclusive, and you want to make it uniquely for yourself.<br></br>Your home represents your life as you journey from one chapter to the next. As your life grows and develops, so should your home. While you learn more about yourself, your home should reflect that exploration. And as you mature in sophistication, the aesthetics of your home should likewise elevate, indicating the changes and developments within.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item className={c.carouselitem}>
      <img src="/images/slider 3.jpg" className={c.image} alt="..." />
        <Carousel.Caption className={c.carouselcap}>
          <h1 className={c.ccp}>Luxury, is not about buying expensive things; it’s about living in a way where you appreciate things.</h1>
          <p  className={c.cp}>
          There are things you love, your home inclusive, and you want to make it uniquely for yourself.<br></br>Your home represents your life as you journey from one chapter to the next. As your life grows and develops, so should your home. While you learn more about yourself, your home should reflect that exploration. And as you mature in sophistication, the aesthetics of your home should likewise elevate, indicating the changes and developments within.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;

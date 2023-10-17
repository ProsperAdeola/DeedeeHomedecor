import c from "./slider.module.css";
import { Carousel } from "react-bootstrap";

const Slide = () => {
  return (
    <Carousel fade indicators={false}>
      <Carousel.Item className={c.carouselitem}>
        <img src="/images/slider 1.jpg" className={c.image} alt="..." />
        <Carousel.Caption className={c.carouselcap}>
          <h1 className={c.ccp}>
            Luxury, is not about buying expensive things; it’s about living in a
            way where you appreciate things.
          </h1>
          <p className={c.cp}>
            There are things you love, your home inclusive, and you want to make
            it uniquely for yourself.<br></br>Your home represents your life as
            you journey from one chapter to the next. As your life grows and
            develops, so should your home. While you learn more about yourself,
            your home should reflect that exploration. And as you mature in
            sophistication, the aesthetics of your home should likewise elevate,
            indicating the changes and developments within.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={c.carouselitem}>
        <img src="/images/slider 2.jpg" className={c.image} alt="..." />
        <Carousel.Caption className={c.carouselcap}>
          <h1 className={c.ccp}>
            Luxury, is not about buying expensive things; it’s about living in a
            way where you appreciate things.
          </h1>
          <p className={c.cp}>
            There are things you love, your home inclusive, and you want to make
            it uniquely for yourself.<br></br>Your home represents your life as
            you journey from one chapter to the next. As your life grows and
            develops, so should your home. While you learn more about yourself,
            your home should reflect that exploration. And as you mature in
            sophistication, the aesthetics of your home should likewise elevate,
            indicating the changes and developments within.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={c.carouselitem}>
        <img src="/images/slider 3.jpg" className={c.image} alt="..." />
        <Carousel.Caption className={c.carouselcap}>
          <h1 className={c.ccp}>
            Luxury, is not about buying expensive things; it’s about living in a
            way where you appreciate things.
          </h1>
          <p className={c.cp}>
            There are things you love, your home inclusive, and you want to make
            it uniquely for yourself.<br></br>Your home represents your life as
            you journey from one chapter to the next. As your life grows and
            develops, so should your home. While you learn more about yourself,
            your home should reflect that exploration. And as you mature in
            sophistication, the aesthetics of your home should likewise elevate,
            indicating the changes and developments within.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;

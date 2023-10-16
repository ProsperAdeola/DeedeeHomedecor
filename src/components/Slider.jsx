import c from "./slider.module.css";

const Slide = () => {
  return (
    <>
      <div
        id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/slider 1.jpg" className={c.image} alt="..." />
            <div className={c.carouselcaption}>
              <h5>First Slide</h5>
              <p>This is the first slide.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src="/images/slider 2.jpg" className={c.image} alt="..." />
            <div className={c.carouselcaption}>
              <h5>First Slide</h5>
              <p>This is the first slide.</p>
            </div>
          </div>
          
          <div class="carousel-item">
            <img src="/images/slider 3.jpg" className={c.image} alt="..." />
            <div className={c.carouselcaption}>
              <h5>First Slide</h5>
              <p>This is the first slide.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slide;

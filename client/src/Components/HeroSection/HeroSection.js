import React from "react";
import VideoPlayer from "react-background-video-player";

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Build Experiences That Create Growth</h1>
            <h2 className="h6">
              Adding innovation to technological applications and helping custom
              build your needs. We are delivering software solutions beyond your
              presumptions
            </h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a
                href="https://youtu.be/wAmbDCJocJM?t=16"
                className="glightbox btn-watch-video"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
            id="left-space"
          >
            <img
              src="../../assets/img/hero-1.png"
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

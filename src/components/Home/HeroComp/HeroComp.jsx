import React, { useState, useEffect, useCallback } from "react";
import "./HeroComp.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import slide1 from "../../../assets/images/HeroImage1.jpg";
import slide2 from "../../../assets/images/HeroImage3.jpg";
import slide3 from "../../../assets/images/HeroImage2.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: slide1,
      subtitle: "We are providing best",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      alignment: "left",
      titleColors: { left: "#ffffff", right: "#F79321" },
    },
    {
      id: 2,
      image: slide2,
      subtitle: "We are providing best",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      alignment: "center",
      titleColors: { left: "#0D2844", right: "#F79321" },
    },
    {
      id: 3,
      image: slide3,
      subtitle: "We are providing best",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      alignment: "right",
      titleColors: { left: "#0D2844", right: "#F79321" },
    },
  ];

  const handleSlideChange = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 1500);
    },
    [isAnimating]
  );

  const handleNextSlide = useCallback(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    handleSlideChange(nextSlide);
  }, [currentSlide, slides.length, handleSlideChange]);

  // Auto slide — depend on the memoized handler
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNextSlide]);

  return (
    <section className="hero-slider" id="home">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""} ${slide.alignment}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <div className="content-wrapper">
                <h3 className={`slide-subtitle ${index === currentSlide ? "animate-subtitle" : ""}`}>
                  {slide.subtitle}
                </h3>
                <h1 className={`slide-title ${index === currentSlide ? "animate-title" : ""}`}>
                  <span style={{ color: slide.titleColors.left }}>Business</span>{" "}
                  <span style={{ color: slide.titleColors.right }}>Solution</span>
                </h1>
                <p className={`slide-description ${index === currentSlide ? "animate-description" : ""}`}>
                  {slide.description}
                </p>
                <div className={`slide-button ${index === currentSlide ? "animate-button" : ""}`}>
                  <a href="#aboutus" className="learn-more-btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Navigation Dots */}
      <div className="slider-navigation">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`nav-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleSlideChange(index)}
          >
            <div className="nav-dot-inner"></div>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="#" className="social-link facebook"><FaFacebookF /></a>
        <a href="#" className="social-link twitter"><FaTwitter /></a>
        <a href="#" className="social-link linkedin"><FaLinkedinIn /></a>
        <a href="#" className="social-link instagram"><FaInstagram /></a>
      </div>
    </section>
  );
};

export default HeroSlider;

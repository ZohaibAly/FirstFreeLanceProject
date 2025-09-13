import React, { useState, useEffect } from 'react';
import './HeroComp.css';
// import theme from '../../../constants/theme';

// Import your images (you'll adjust paths later)
import slide1 from '../../assets/images/HeroImage1.jpg';
import slide2 from '../../assets/images/HeroImage2.jpg';
import slide3 from '../../assets/images/HeroImage3.jpg';


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Business Solution",
      subtitle: "We are providing best",
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      alignment: "left"
    },
    {
      id: 2,
      image: slide2,
      title: "Business Solution",
      subtitle: "We are providing best",
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      alignment: "center"
    },
    {
      id: 3,
      image: slide3,
      title: "Business Solution",
      subtitle: "We are providing best",
      description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
      alignment: "right"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    handleSlideChange(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    handleSlideChange(prevSlide);
  };

  return (
    <section className="hero-slider" id="home">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''} ${slide.alignment}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* <div className="slide-overlay"></div> */}
            <div className="slide-content">
              <div className="content-wrapper">
                <h3 className={`slide-subtitle ${index === currentSlide ? 'animate-subtitle' : ''}`}>
                  {slide.subtitle}
                </h3>
                <h1 className={`slide-title ${index === currentSlide ? 'animate-title' : ''}`}>
                  <span className="blue-text">Business</span>{' '}
                  <span className="orange-text">Solution</span>
                </h1>
                <p className={`slide-description ${index === currentSlide ? 'animate-description' : ''}`}>
                  {slide.description}
                </p>
                <div className={`slide-button ${index === currentSlide ? 'animate-button' : ''}`}>
                  <a href="#aboutus" className="learn-more-btn">
                    Learn More
                  </a>
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
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          >
            <div className="nav-dot-inner"></div>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="#" className="social-link facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-link twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-link linkedin">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="social-link instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Arrow Navigation */}
      <button 
        className="slider-arrow prev-arrow" 
        onClick={handlePrevSlide}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = theme.colors.orange;
          e.target.style.borderColor = theme.colors.orange;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        className="slider-arrow next-arrow" 
        onClick={handleNextSlide}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = theme.colors.orange;
          e.target.style.borderColor = theme.colors.orange;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default HeroSlider;
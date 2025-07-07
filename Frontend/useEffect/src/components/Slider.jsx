import React, { useState, useEffect } from 'react';
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // keeps track of which image to show
  const images = [
    "https://images.unsplash.com/photo-1750409221671-d925a6d7126c?w=700&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1750729058168-9cc8090ae2ec?w=700&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1749738469976-d274713b4058?w=700&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1751104156941-d7a7e6c409de?w=700&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1751402059584-ad2f8e0216df?w=700&auto=format&fit=crop&q=60"
  ];

  // ✅ Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext(); // Move to next image
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  // ✅ Previous image
  const goToPrev = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // ✅ Next image
  const goToNext = () => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // ✅ Jump to specific image when clicking dot
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {/* Navigation Buttons */}
      <button className="btn left" onClick={goToPrev}>&#10094;</button>
      <img src={images[currentIndex]} alt="slider" className="slide-image" />
      <button className="btn right" onClick={goToNext}>&#10095;</button>

      {/* Dots at the bottom */}
      <div className="dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? "active" : ""}`} 
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

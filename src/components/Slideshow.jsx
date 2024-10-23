import React, { useState } from "react";

const Slideshow = () => {
  // Array of images (can be updated with your own images)
  const images = [
    "https://picsum.photos/800/400?image=0",
    "https://picsum.photos/800/400?image=1",
    "https://picsum.photos/800/400?image=2",
    "https://picsum.photos/800/400?image=3",
    "https://picsum.photos/800/400?image=4",
    "https://picsum.photos/800/400?image=5",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous image
  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {/* Display the current image */}
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />

        {/* Navigation buttons */}
        <button onClick={previousImage} className="nav-button prev">Prev</button>
        <button onClick={nextImage} className="nav-button next">Next</button>

        {/* Image index display */}
        <div className="image-counter">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
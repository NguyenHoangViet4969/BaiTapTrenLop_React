import React from "react";

const NavigationButtons = ({ previousImage, nextImage, resetToStart }) => {
  return (
    <div>
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
      <button onClick={resetToStart}>Back to Start</button>
    </div>
  );
};

export default NavigationButtons;
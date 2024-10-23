import React from "react";

const ImageDisplay = ({ currentIndex }) => {
  return (
    <img
      src={`https://picsum.photos/300/200?image=${currentIndex}`}
      alt={`Slide ${currentIndex}`}
    />
  );
};

export default ImageDisplay;
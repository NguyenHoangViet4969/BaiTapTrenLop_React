import React, { useState } from "react";
import './Slideshow.css';

const Slideshow = () => {
  // Mảng ID ảnh từ picsum.photos
  const images = ["0", "1", "2", "3", "4", "5"]; // ID ảnh

  const [currentIndex, setCurrentIndex] = useState(0); // Index ảnh hiện tại
  const [imageSize, setImageSize] = useState("800x400"); // Kích thước ảnh

  // Chuyển sang ảnh tiếp theo
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Quay lại ảnh trước
  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Quay lại ảnh đầu tiên
  const backToStart = () => {
    setCurrentIndex(0); // Reset về ảnh đầu tiên
  };

  // Chọn ngẫu nhiên một ảnh
  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentIndex(randomIndex);
  };

  // Thay đổi kích thước ảnh
  const handleSizeChange = (e) => {
    setImageSize(e.target.value); // Cập nhật kích thước ảnh
  };

  // Tách kích thước width và height từ imageSize
  const [width, height] = imageSize.split('x');

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {/* Hiển thị ảnh với kích thước động */}
        <img
          src={`https://picsum.photos/${width}/${height}?image=${images[currentIndex]}`}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/800x400?text=Error+Loading"; // Hiển thị ảnh dự phòng nếu lỗi
          }}
        />

        {/* Nút điều hướng */}
        <div className="button-group">
          <button onClick={previousImage} disabled={currentIndex === 0}>
            Previous
          </button>
          <button onClick={nextImage} disabled={currentIndex === images.length - 1}>
            Next
          </button>
          <button onClick={backToStart}>Back to Start</button>
          <button onClick={randomImage}>Random</button>
        </div>

        {/* Chọn kích thước ảnh */}
        <div className="size-selector">
          <label htmlFor="size">Choose image size: </label>
          <select id="size" value={imageSize} onChange={handleSizeChange}>
            <option value="800x400">800x400</option>
            <option value="600x300">600x300</option>
            <option value="400x200">400x200</option>
          </select>
        </div>

        {/* Hiển thị chỉ số của ảnh */}
        <div className="image-counter">
          {currentIndex + 1}/{images.length}
        </div>

        {/* Thumbnails */}
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={`https://picsum.photos/100/50?image=${image}`} // Thumbnail
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

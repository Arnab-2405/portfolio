import React from "react";
import styles from "../stylesheets/Gallery.module.css";

function Gallery() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
  ]; // Replace with your image paths

  return (
    <>
      <div className={styles.header}>
        Some of the best Moments Captured by me
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className={styles.gridChild}>
              {image}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;

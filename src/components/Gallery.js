import React from "react";
import styles from "../stylesheets/Gallery.module.css";
import dataSource from "../datasets/gallery.json";

function Gallery() {
  const numberOfImages = 10;
  const array = Array(numberOfImages).fill(0);

  return (
    <>
      <div className={styles.header}>
        Some of the best Moments Captured by me
      </div>

      <div className={styles.content}>
        {dataSource.map((image, index) => (
          <div key={index} className={styles.box}>
            <img src={image.imgSrc}></img>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;

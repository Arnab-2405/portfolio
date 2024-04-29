import React from "react";
import styles from "../stylesheets/Gallery.module.css";
import dataSource from "../datasets/gallery.json";

function Gallery() {
  return (
    <>
      <div className={styles.header} id="gallery">
        Some of the best Moments Captured by me
      </div>

      <div className={styles.content}>
        {dataSource.map((image, index) => (
          <div key={index} className={styles.box}>
            <img src={image.imgSrc} alt={image.alt}></img>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;

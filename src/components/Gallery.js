import React from "react";
import styles from "../stylesheets/Gallery.module.css";
import dataSource from "../datasets/gallery.json";

function Gallery() {
  return (
    <>
      <div className={styles.background}>
        <div
          className={[styles.header].join(" ")}
          id="gallery"
        >
          Some of the best Moments Captured by me
        </div>

        <div className={[styles.content].join(" ")}>
          {dataSource.map((image, index) => (
            <div key={index} className={styles.box}>
              <img src={image.imgSrc} alt={image.alt}></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;

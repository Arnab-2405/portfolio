import React from "react";
import styles from "../stylesheets/Gallery.module.css";
import dataSource from "../datasets/gallery.json";

function Gallery() {
  return (
    <>
      <div className={styles.background}>
        <div className={[styles.header].join(" ")} id="gallery">
          Highlighted Moments
        </div>

        <div className={[styles.content].join(" ")}>
          {dataSource.map((image, index) => (
            <div key={index} className={styles.box}>
              {image.type === "video" ? (
                <video src={image.imgSrc} autoPlay loop muted></video>
              ) : (
                <img src={image.imgSrc} alt={image.alt}></img>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;

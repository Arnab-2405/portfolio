import React, { useState, useEffect } from "react";
import style from "../stylesheets/Timeline.module.css";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/animate.json";
import timelineData from "../datasets/timeline.json";

function Timeline() {
  const [filledHeight, setFilledHeight] = useState(0);

  useEffect(() => {
    function updateFilledHeight() {
      const newHeight =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setFilledHeight(newHeight);
    }

    window.addEventListener("scroll", updateFilledHeight);

    updateFilledHeight();

    return () => {
      window.removeEventListener("scroll", updateFilledHeight);
    };
  }, []);

  return (
    <>
      <div className={style.title}>Timeline</div>
      <div className={style.flexbox}>
        <div className={style.timeline}>
          <div
            className={style.filled}
            style={{ height: `${filledHeight}%` }}
          ></div>
        </div>
        <div className={style.rightCard}>
          <div className={style.content}>
            {timelineData.map((item, index) => (
              <React.Fragment key={index}>
                <div className={style.arrow}></div>
                <div className={style.card}>
                  <img src={item.image} alt="image"></img>
                  <div className={style.text}>
                    <h3>{item.jobTitle}</h3>
                    <h4>{item.date}</h4>
                    <h5>{item.company}</h5>
                  </div>
                </div>
                <div className={style.pseduo}></div>
              </React.Fragment>
            ))}
          </div>
          <div className={style.svg}>
            <Lottie
              className={style.image}
              animationData={groovyWalkAnimation}
              loop={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;

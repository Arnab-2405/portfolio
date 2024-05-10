import React, { useState, useEffect } from 'react';
import style from '../stylesheets/Timeline.module.css';

function Timeline() {
  const [filledHeight, setFilledHeight] = useState(0);

  useEffect(() => {
    function updateFilledHeight() {
      const newHeight = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setFilledHeight(newHeight);
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateFilledHeight);

    // Call once initially to set the initial filled height
    updateFilledHeight();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', updateFilledHeight);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div className={style.flexbox}>
      <div className={style.timeline}>
        <div className={style.filled} style={{ height: `${filledHeight}%` }}></div>
      </div>
      <div className={style.rightCard}><div>C2</div><div>VC3</div></div>
    </div>
  );
}

export default Timeline;

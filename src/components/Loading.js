import React, { useEffect, useState } from "react";
import "../stylesheets/Loading.css";

export default function Loading() {
  let [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count++);
    }, 50);

    // Clear the interval after 5000ms
    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    // Cleanup function for useEffect
    return () => clearInterval(intervalId);
  }, []);

  if (count === 99) {
    let element = document.getElementById("val1");
    element.textContent = "Initialized";

    element = document.getElementById("val2");
    element.textContent = "Initialized";
  }

  return (
    <>
      <div className="content">
        <div className="top">
          <div className="loading-bar">
            <div className="number">{count > 100 ? 100 : count}%</div>
            <div className="initializing base" id="val1">
              Initializing...
            </div>
            <div className="initializing-2 base" id="val2">
              Initializing...
            </div>
          </div>
        </div>
        <div className="highlight"></div>
      </div>
    </>
  );
}

import React, { useEffect, useState, useRef } from "react";
import style from "../stylesheets/Location.module.css";

function Location() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseRef = useRef();

  useEffect(() => {
    mouseRef.current = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", mouseRef.current);

    return () => {
      window.removeEventListener("mousemove", mouseRef.current);
    };
  }, []);
  return (
    <div className={style.location}>
      <div className={style.xAxis}>{mousePosition.x} : X</div>
      <div className={style.yAxis}>{mousePosition.y} : Y</div>
    </div>
  );
}

export default Location;

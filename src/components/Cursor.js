import React,{ useEffect, useState } from "react";
import style from "../stylesheets/Cursor.module.css";
import { motion } from "framer-motion";
function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className={style.cursor}
      animate={{ x: position.x , y: position.y }}
    ></motion.div>
  );
}

export default Cursor;

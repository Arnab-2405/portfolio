import React from "react";
import style from "../stylesheets/Experience.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Experience() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <div className={style.parallax} ref={ref}>
        <motion.h2 style={{ y: yText }}>My Experience</motion.h2>
        <motion.div className={style.mountains}></motion.div>
        <motion.div style={{ y: yBg }} className={style.planets}></motion.div>
        <motion.div style={{ y: yBg }} className={style.stars}></motion.div>
      </div>
    </>
  );
}

export default Experience;

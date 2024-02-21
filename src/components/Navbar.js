import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../stylesheets/Navbar.module.css";

function Navbar() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
    console.log(time);
  };
  setInterval(UpdateTime);

  return (
    <>
      <div className={style.layout}>
        <div className={style.header}>Portfolio</div>
        <div className={style.list}>
          <ul>
            <li>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "#F4F4F4" }}
              >
                Home
              </Link>
            </li>
            <li>About</li>
            <li>My Project's</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={style.time}>{ctime}</div>
      </div>
    </>
  );
}

export default Navbar;

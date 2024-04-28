import React from "react";
import style from "../stylesheets/Contact.module.css";

function Contact() {
  return (
    <>
      <div className={style.content}>
        <div className={[style.base, style.image].join(" ")}></div>
        <div className={[style.overlay, style.base].join(" ")}></div>
        <div className={[style.base, style.textLayer].join(" ")}>
            <div className={style.header}>Contact Me</div>
            <div className={style.name}><div className={style.subHead}>Name</div> <input type="text" placeholder="Enter your name"></input></div>
            <div className={style.email}><div className={style.subHead}>Email</div> <input type="text" placeholder="Enter your email"></input></div>
            <div className={style.message}><div className={style.subHead}>Message</div><textarea type="text-area" placeholder="Enter your message"></textarea></div>
        </div>
      </div>
    </>
  );
}

export default Contact;

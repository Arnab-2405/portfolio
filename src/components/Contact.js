import React from "react";
import style from "../stylesheets/Contact.module.css";
import leaflet from "../assets/leaf.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <>
      <div className={style.content} id="contact">
        <div className={style.base}>
          <div className={style.leaf}>
            <img src={leaflet} alt="leaf"></img>
          </div>
          <div className={style.getInTouch}>
            <div className={style.text1}>get in</div>
            <div className={style.text2}>touch</div>
          </div>
          <div className={style.arrow}></div>
          <div className={style.formSection}>
            <TextField
              id="standard-basic"
              label="Your Name"
              variant="standard"
              sx={{
                "& .MuiInput-root": {
                  color: "#f2f2f2",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  // Bottom border
                  "&:before": {
                    borderColor: "#f2f2f2",
                    borderWidth: "2px",
                  },
                  // Border on focus
                  "&:after": {
                    borderColor: "#f2f2f2",
                    borderWidth: "3px",
                  },
                  ":hover:not(.Mui-focused)": {
                    "&:before": {
                      borderColor: "#f2f2f2",
                      borderWidth: "2px",
                    },
                  },
                },
                // Label
                "& .MuiInputLabel-standard": {
                  color: "#f2f2f2",
                  fontWeight: "bold",
                  "&.Mui-focused": {
                    color: "#f2f2f2",
                  },
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Your Email"
              variant="standard"
              sx={{
                "& .MuiInput-root": {
                  color: "#f2f2f2",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  // Bottom border
                  "&:before": {
                    borderColor: "#f2f2f2",
                    borderWidth: "2px",
                  },
                  // Border on focus
                  "&:after": {
                    borderColor: "#f2f2f2",
                    borderWidth: "3px",
                  },
                  ":hover:not(.Mui-focused)": {
                    "&:before": {
                      borderColor: "#f2f2f2",
                      borderWidth: "2px",
                    },
                  },
                },
                // Label
                "& .MuiInputLabel-standard": {
                  color: "#f2f2f2",
                  fontWeight: "bold",
                  "&.Mui-focused": {
                    color: "#f2f2f2",
                  },
                },
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Your Message"
              multiline
              rows={4}
            />
            <div className={style.send}>
              <Button variant="contained">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

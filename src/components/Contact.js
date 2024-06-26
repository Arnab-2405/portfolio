import React from "react";
import style from "../stylesheets/Contact.module.css";
import leaflet from "../assets/leaf.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from '@mui/material/Snackbar';

function Contact() {
  const service_id = "service_op1fc9e";
  const template_id = "template_5iid96t";
  const publicKey1 = "cn98zWB9VbmVps8KP";

  const CustomButton = styled(Button)({
    backgroundColor: "#010809",
    color: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#010809",
    },
  });

  const defaultFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send(service_id, template_id, formData, publicKey1).then(
      () => {
        setCheck(true)
        setOpen(true)
        console.log("SUCCESS!");
      },
      (error) => {
        setCheck(false)
        setOpen(true);
        console.log("FAILED...", error);
      }
    );

    setFormData(defaultFormData);
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };

  const [check,setCheck]=useState(false);

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
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                "& .MuiInput-root": {
                  color: "#f2f2f2",
                  "&:before": {
                    borderColor: "#f2f2f2",
                    borderWidth: "1px",
                  },
                  "&:after": {
                    borderColor: "#f2f2f2",
                    borderWidth: "2px",
                  },
                  ":hover:not(.Mui-focused)": {
                    "&:before": {
                      borderColor: "#f2f2f2",
                      borderWidth: "1px",
                    },
                  },
                },
                "& .MuiInputLabel-standard": {
                  color: "#f2f2f2",
                  fontFamily: "Quicksand, sans-serif",
                  "&.Mui-focused": {
                    color: "#f2f2f2",
                  },
                },
                flexBasis: "100%",
              }}
            />
            <TextField
              id="standard-basic"
              label="Your Email"
              variant="standard"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                "& .MuiInput-root": {
                  color: "#f2f2f2",
                  fontFamily: "Quicksand, sans-serif",
                  "&:before": {
                    borderColor: "#f2f2f2",
                    borderWidth: "1px",
                  },
                  "&:after": {
                    borderColor: "#f2f2f2",
                    borderWidth: "2px",
                  },
                  ":hover:not(.Mui-focused)": {
                    "&:before": {
                      borderColor: "#f2f2f2",
                      borderWidth: "1px",
                    },
                  },
                },
                "& .MuiInputLabel-standard": {
                  color: "#f2f2f2",
                  fontFamily: "Quicksand, sans-serif",
                  "&.Mui-focused": {
                    color: "#f2f2f2",
                  },
                },
                flexBasis: "100%",
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Your Message"
              multiline
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#f2f2f2",
                  },
                  "&:hover fieldset": {
                    borderColor: "#f2f2f2",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#f2f2f2",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#f2f2f2",
                },
                "& .MuiInputLabel-root": {
                  color: "#f2f2f2",
                  fontFamily: "Quicksand, sans-serif",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#f2f2f2",
                },
                "& .MuiInputBase-root": {
                  "&.Mui-focused": {
                    color: "#f2f2f2",
                  },
                },
                flexBasis: "100%",
              }}
            />
            <div className={style.send}>
              <CustomButton
                variant="contained"
                onClick={(event) => handleSubmit(event)}
              >
                Send
              </CustomButton>
            </div>
          </div>
        </div>
        <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={check?"Message has been successfully recieved!":"Something went wrong!"}
      />
      </div>
    </>
  );
}

export default Contact;

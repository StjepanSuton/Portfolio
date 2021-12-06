import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Form() {
  const form = useRef();
  const [name, setName] = useState(false);
  const [emai, setEmail] = useState(false);

  const userName = (e) => {
    if (e.target.value.length >= 1) {
      console.log(e.target.value.length);
      setName(true);
    } else {
      setName(false);
    }
  };

  const userEmail = (e) => {
    if (e.target.value.length >= 1) {
      console.log(e.target.value.length);
      setName(true);
    } else {
      setName(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        "service_1nuj27f",
        "template_huczv8s",
        form.current,
        "user_kDXBH5BcgFCjSTkzkifWR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        className={classes["form-container"]}
        ref={form}
        onSubmit={sendEmail}
      >
        <TextField
          onChange={userName}
          name="name"
          label="Name"
          variant="outlined"
        />
        <TextField
          onChange={userEmail}
          name="email"
          type="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          name="message"
          type="message"
          label="Message"
          variant="outlined"
        />
        <Button type="submit">Send </Button>
      </form>
    </div>
  );
}

export default Form;

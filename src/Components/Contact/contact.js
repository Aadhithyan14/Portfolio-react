import React, { useRef } from "react";
// import facebookIcon from '../../assets/'
import "./contact.css";
import emailjs from "@emailjs/browser";
import FaceBook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
// import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jsyw8na",
        "template_kgpliii",
        form.current,
        "eYfZvBoisNcqCgfVf"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email");
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTile">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities{" "}
        </span>

        <form className="conatForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="from_name"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="email"
            name="from_Email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>

          <br />
          <button type="submit" className="submitBtn" value="send">
            Submit
          </button>
          <div className="links">
            <img src={FaceBook} alt="facebook" className="link" />
            <img src={Instagram} alt="instagram" className="link" />
            <img src={Youtube} alt="youtube" className="link" />
            <img src={Twitter} alt="twitter" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

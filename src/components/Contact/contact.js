import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ek1i0y9", "template_penvbhg", form.current, {
        publicKey: "zxQQI_jLBHwXMFzIw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("email sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            required
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com/profile.php?id=100008879479183&mibextid=ZbWKwL">
              <img src={FacebookIcon} alt="facebook" className="link" />
            </a>
            <a href="https://x.com/Favydabs?t=77N5famP4ylD-wU_Dmcn_g&s=09">
              <img src={twitter} alt="twitter" className="link" />
            </a>
            <a href="https://www.instagram.com/favydabs?igsh=NzBhczhmZGpyOWw5">
              <img src={instagram} alt="instagram" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/dabit-favour-297b11250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={linkedin} alt="linkedin" className="linkedin" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;

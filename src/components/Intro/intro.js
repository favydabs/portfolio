import React from "react";
import "./intro.css";
import bg from "../../assets/Favour copy.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

function Intro() {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Favour Dabit </span> <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I am a skilled Frontend developer 
          <br />
          with experience in creating
          <br/>
          visually and user friendly <br/> websites.
        </p>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <button className="btn">
            <img src={btnImg} alt="hire me" className="btnImg" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default Intro;

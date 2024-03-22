import bg from "../../assets/Favour copy.png";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={bg} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I'm a frontend developer with a solid foundation in software
            engineering. Graduating from ALX Software Engineering has equipped
            me with a strong skill set and a deep understanding of frontend
            development principles. My journey doesn't stop there. I'm also a
            proud graduate of Web3Bridge, further specializing in web2 advance.
            With a keen eye for design and a knack for crafting engaging user
            experiences.
            Whether it's building responsive websites, optimizing user
            interfaces. I'm always eager to tackle new challenges and push the
            boundaries of what's possible in frontend development.
          </p>
        </div>
      </div>
    </section>
  );
}

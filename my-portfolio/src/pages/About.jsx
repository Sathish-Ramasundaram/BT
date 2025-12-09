import "./About.css";

export default function About() {
    return(
      <section id="about" className="about">
        <h1>About Me</h1>
        <div className="about-left">
          <img src="/images/profile.jpg" alt="SathishR" className="about-pic" />
        </div>
        <div className="about-right">
          <p className="about-text">
            Hello there, I am Sathish. <br/><br/>
            I am an aspiring Web Developer, currently building expertise in front‑end technologies to contribute to real‑world projects with a user‑focused approach. Backed by 5 years of experience in sales and customer support, I bring strong analytical problem‑solving skills, effective client communication, and the ability to adapt quickly to new technologies.
          </p>
          <a href="/doc/SATHISH R 7.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
          View Resume
          </a>
        </div>
      </section>
    );
}

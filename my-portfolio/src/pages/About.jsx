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
            Aspiring Full Stack Developer with 7+ months of Front-End Development internship experience building React applications and reusable UI components. 
            Backed by 5+ years of customer-facing experience with strong problem-solving and collaboration skills.
          </p>
          <a href="/doc/Sathish_R_12.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
          View Resume
          </a>
        </div>
      </section>
    );
}

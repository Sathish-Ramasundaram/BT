export default function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h5>Daily Quotes by Day and Date</h5>
          <p>A web app that displays a quote based on the current day of the week. 
            It dynamically updates the quote, date and day name. 
            <br/><br/>
            Tech Stack: HTML, CSS JavaScript 
          </p>
          <a href="https://sathish-ramasundaram.github.io/Project/7DayWithQuote/7calenderwithquotes.html" target="_blank" rel="noopener noreferrer">
            View Project <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="project-card">
          <h5>Personal Dictionary for Adding New Words</h5>
          <p> A simple functional dictionary web app. It provides input boxes for adding words and 
            their meanings, with built‑in validation to prevent duplicate entries. All stored words are displayed in 
            ascending order for easy browsing.  
            <br/><br/>
            Tech Stack: HTML, Python Flask, SQLite 
            </p>
            <a href="https://dictionary-l2eu.onrender.com/" target="_blank" rel="noopener noreferrer">
            View Project <i class="fas fa-arrow-right"></i>
            </a>
        </div>
        <div className="project-card">
          <h5>Store </h5>
          <p></p>
        </div>
      </div>
    </section>
  );
}

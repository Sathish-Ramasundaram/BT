import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h5>Digital Clock</h5>
          <p>The clock shows the current time in a 12‑hour format with AM/PM, updating live every second.
            <br/><br/>
            Tech Stack: HTML, CSS, JavaScript
          </p>
          <a href="https://sathish-ramasundaram.github.io/InlighnX/Digital%20Clock/index.html" target="_blank" rel="noopener noreferrer">
            View Project <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="project-card">
          <h5>Daily Quotes by Day and Date</h5>
          <p>A web app that displays a quote based on the current day of the week. 
            It dynamically updates the quote, date and day name. 
            <br/><br/>
            Tech Stack: HTML, CSS JavaScript 
          </p>
          <a href="https://sathish-ramasundaram.github.io/Project/7DayWithQuote/7calenderwithquotes.html" target="_blank" rel="noopener noreferrer">
            View Project <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="project-card">
          <h5>Expense Tracker</h5>
          <p>A simple, interactive app that helps users manage their finances. 
            It allows adding income and expense transactions, automatically updates the balance, and displays a transaction history with delete options. 
            Data is stored in localStorage, ensuring persistence even after refreshing or reopening the browser. 
            <br/><br/>
            Tech Stack: HTML, CSS JavaScript 
          </p>
          <a href="https://sathish-ramasundaram.github.io/InlighnX/Expense%20Tracker/index.html" target="_blank" rel="noopener noreferrer">
            View Project <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="project-card">
          <h5>Personal Dictionary for Adding New Words</h5>
          <p> A simple functional dictionary. 
            It provides input boxes for adding words and their meanings, with built‑in validation to prevent duplicate entries (case‑insensitive). 
            Users can search for stored words, and if a word is not found, the app prompts them to add it. 
            All stored words are displayed in ascending order for easy browsing. 
            <br/><br/>
            Tech Stack: HTML, Python Flask, PostgreSQL
            </p>
            <a href="https://dictionarywithsearch2.onrender.com/" target="_blank" rel="noopener noreferrer">
            View Project <i className="fas fa-arrow-right"></i>
            </a>
        </div>

      </div>
    </section>
  );
}

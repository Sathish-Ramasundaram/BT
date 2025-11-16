import "./Home.css";

export default function Home() {
    return (

        <section id="home" className="home">
            <div className="text-block">
                <h1 className="welcome">Welcome to My Portfolio!</h1>
                <h1 className="name">Sathish R</h1>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/sathish-ramasundaram-44a308162" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Sathish-Ramasundaram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.facebook.com/ram.sathish.146/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>

            <div className="image-block">
                <img src="/images/profile.jpg" alt="SathishR" className="profile-pic"></img>
            </div>
        </section>
    );
}
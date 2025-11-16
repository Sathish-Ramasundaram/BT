import "../styles/loading.css";              // import the CSS file
import loadingImage from "../assets/linkedin.png"; // import your PNG

function Loading() {
  return (
    <div className="loading-container">
      <img src={loadingImage} alt="Loading..." className="loading-image" />
    </div>
  );
}

export default Loading;

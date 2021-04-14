import react from "react";
import user from "./imageInSrc.jpg";
import "./Styles.css";

export default function App() {
  return (
    <div style={{ border: "solid 1px black", maxwidth: "100vw" }}>
      <h1 className="title red">Your name here</h1>

      <p>
        greetings
        <br />
        this is my first JSX project
      </p>

      <div className="image-container">
        <img src={user} alt="imagesrc" />

        <img src="imageInPublic.jpeg" alt="imagePublic" />
      </div>

      <div style={{ width: "320px", height: "240" }}></div>

      <iframe
        width="300"
        height="250"
        src="https://www.youtube.com/embed/DLX62G4lc44"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default App;

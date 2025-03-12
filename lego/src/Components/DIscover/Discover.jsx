import React from "react";
import "./Discover.css";

const models = [
  {
    title: "LEGO - Doctor Strange",
    src: "https://sketchfab.com/models/738203f8127646948af71d6c9d90f783/embed",
  },
  {
    title: "Lego Mars Curiosity Rover",
    src: "https://sketchfab.com/models/1c4b44e8dc454ccebf781272efebd587/embed",
  },
  {
    title: "Lego Joker",
    src: "https://sketchfab.com/models/f717bfc373834e388eb8e5d7fff3ee8a/embed",
  },
  {
    title: "Flying Lego Car (With Lego Figure Inside)",
    src: "https://sketchfab.com/models/460822ebc39744a6b62c2fc9aac165ac/embed",
  },
];

const Discover = () => {
  return (
    <section id="discover" className="discover-container">
      <div className="discover-header">
        <h2>🔍 Discover LEGO in 3D</h2>
        <p>Explore highly detailed LEGO models in interactive 3D.</p>
      </div>

      <div className="models-grid">
        {models.map((model, index) => (
          <div key={index} className="sketchfab-wrapper">
            <iframe
              title={model.title}
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src={model.src}
            ></iframe>
            <h3>{model.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discover;

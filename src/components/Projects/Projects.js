import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projectEl">
        <h3>Góry</h3>
        <div className="projectElImage projectElImageMountains"></div>
      </div>
      <div className="projectEl">
        <h3>Podróże</h3>
        <div className="projectElImage projectElImageTravels"></div>
      </div>
      <div className="projectEl">
        <h3>Polska</h3>
        <div className="projectElImage projectElImagePoland"></div>
      </div>
      <div className="projectEl">
        <h3>Koty</h3>
        <div className="projectElImage projectElImageCats"></div>
      </div>
    </div>
  );
};

export default Projects;

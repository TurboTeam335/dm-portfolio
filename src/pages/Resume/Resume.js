import React from 'react';
import './Resume.css'; 

function Resume() {
  const resumeUrl = "https://raw.githubusercontent.com/TurboTeam335/dm-portfolio/135134014fbd5c3630473552bce37c4d07347c4c/Daniel%20Mascali%202024%20WebDev%20Resume.pdf";

  return (
    <div className="resume-page">
      <h2>Resume</h2>
      <div className="resume-container">
        <iframe 
          src={resumeUrl}
          title="My Resume"
          width="100%"
          height="500px"
        ></iframe>
      </div>
      <a
        href="https://raw.githubusercontent.com/TurboTeam335/dm-portfolio/135134014fbd5c3630473552bce37c4d07347c4c/Daniel%20Mascali%202024%20WebDev%20Resume.pdf"
        download="YourResumeFileName.pdf"
        className="download-button"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;

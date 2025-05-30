import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const cvUrl = '/assets/cv.pdf';

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // CV is now available, so we don't need to prevent default
    // The browser will handle the download automatically
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>I am a Software Engineer</h1>
          <p>Specialized in Quality Assurance & Testing</p>
          <a 
            href={cvUrl}
            download 
            className="download-cv-btn"
            onClick={handleDownloadClick}
          >
            <i className="fas fa-download"></i>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default if CV is not yet uploaded
    if (!process.env.REACT_APP_CV_URL) {
      e.preventDefault();
      alert('CV will be available soon!');
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>I am a Software Engineer</h1>
          <p>Specialized in Quality Assurance & Testing</p>
          <a 
            href={process.env.REACT_APP_CV_URL || '#'}
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
import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-text">
            <p>
              Dedicated Software QA Engineer with a passion for ensuring software quality and reliability. 
              Specialized in automated testing, test planning, and quality assurance methodologies.
            </p>
            <p>
              I believe in the importance of thorough testing and collaboration to deliver exceptional software products.
              My approach combines technical expertise with strong analytical skills to identify and prevent potential issues
              before they reach production.
            </p>
            <p>
              With expertise in automated testing, test strategy development, and agile methodologies, 
              I focus on delivering high-quality software through comprehensive testing and efficient defect management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
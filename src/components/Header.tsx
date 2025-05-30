import React, { useState } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className="mobile-toggle" onClick={toggleMenu}>
        <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
      </button>

      <header className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <nav className="nav-container">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src="/assets/profile-image.jpeg" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <h1 className="name">Yaman Maharjan</h1>
              <p className="title">QA Engineer</p>
            </div>
          </div>

          <ul className="nav-links">
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-user"></i>
              <span>About</span>
            </a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-code"></i>
              <span>Skills</span>
            </a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-briefcase"></i>
              <span>Experience</span>
            </a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-graduation-cap"></i>
              <span>Education</span>
            </a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-project-diagram"></i>
              <span>Projects</span>
            </a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </a></li>
          </ul>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/yaman-maharjan/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/yaman1234" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:yamanmaharjan00@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header; 
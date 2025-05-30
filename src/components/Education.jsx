import React, { useState } from 'react';
import '../styles/Education.css';
import '../styles/common.css';

const Education = () => {
  const [expandedId, setExpandedId] = useState(null);

  const educationData = [
    {
      id: 1,
      level: "B.E. Software Engineering",
      school: "Nepal College of Information Technology (NCIT)",
      degree: "Bachelor of Engineering in Software Engineering",
      year: "2015 - 2020",
      description: "Completed a comprehensive program in software engineering, focusing on software development, testing, and project management."
    },
    {
      id: 2,
      level: "Higher Secondary Education",
      school: "Carribean College",
      degree: "Science Stream (Computer Science)",
      year: "2013 - 2015",
      description: "Focused on Computer Science, Mathematics, and Physics."
    },
    {
      id: 3,
      level: "Secondary Education",
      school: "Indreni Secondary English School",
      degree: "SLC",
      year: "2012",
      description: "Built strong foundation in Science and Mathematics."
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="education-section section-container">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <p className="education-description">
          My academic journey has equipped me with a strong foundation in software testing and quality assurance.
        </p>

        <div className="education-timeline">
          {educationData.map((edu) => (
            <div 
              key={edu.id} 
              className={`education-card ${expandedId === edu.id ? 'expanded' : ''}`}
              onClick={() => toggleExpand(edu.id)}
            >
              <div className="education-card-header">
                <div className="education-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="education-basic-info">
                  <h3>{edu.level}</h3>
                  <h4>{edu.school}</h4>
                  <p className="education-year">{edu.year}</p>
                </div>
                <div className="expand-icon">
                  <i className={`fas fa-chevron-${expandedId === edu.id ? 'up' : 'down'}`}></i>
                </div>
              </div>

              <div className="education-card-content">
                <div className="education-details">
                  <p className="degree">{edu.degree}</p>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 
import React, { useState } from 'react';
import '../styles/Education.css';

const Education = () => {
  const [expandedId, setExpandedId] = useState(null);

  const educationData = [
    {
      id: 1,
      level: "Bachelor's Degree",
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2022",
      description: "Specialized in Software Testing and Quality Assurance. Completed coursework in Software Testing Methodologies, Automation Testing, and Software Quality Management.",
      achievements: [
        "Graduated with First Class Honors",
        "Led the Software Testing Club",
        "Completed certification in Automated Testing"
      ]
    },
    {
      id: 2,
      level: "Higher Secondary Education",
      school: "High School Name",
      degree: "Science Stream",
      year: "2016 - 2018",
      description: "Focused on Computer Science, Mathematics, and Physics.",
      achievements: [
        "School topper in Computer Science",
        "Participated in National Science Olympiad",
        "Member of the School's Tech Club"
      ]
    },
    {
      id: 3,
      level: "Secondary Education",
      school: "School Name",
      degree: "General Education",
      year: "2014 - 2016",
      description: "Built strong foundation in Science and Mathematics.",
      achievements: [
        "Academic Excellence Award",
        "Active participant in Science exhibitions",
        "Perfect attendance record"
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2>Education</h2>
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
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
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
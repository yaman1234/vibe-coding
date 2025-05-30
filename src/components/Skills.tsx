import React from 'react';
import '../styles/Skills.css';
import '../styles/common.css';

interface Skill {
  name: string;
  expertise: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Testing Tools",
      skills: [
        { name: "Selenium", expertise: 90 },
        { name: "TestNG", expertise: 80 },
        { name: "Postman", expertise: 95 },
        { name: "JMeter", expertise: 75 }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Java", expertise: 60 },
        { name: "Python", expertise: 60 },
        { name: "JavaScript", expertise: 60 },
        { name: "SQL", expertise: 70 },
        { name: "HTML/CSS", expertise: 80 }
      ]
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Agile", expertise: 95 },
        { name: "Scrum", expertise: 90 },
        { name: "CI/CD", expertise: 65 }
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { name: "JIRA", expertise: 95 },
        { name: "Git", expertise: 85 },
        { name: "Jenkins", expertise: 80 },
        { name: "Docker", expertise: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section-container">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.expertise}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.expertise}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
import React from 'react';
import '../styles/Skills.css';

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
        { name: "JUnit", expertise: 85 },
        { name: "TestNG", expertise: 80 },
        { name: "Cypress", expertise: 85 },
        { name: "Postman", expertise: 95 },
        { name: "JMeter", expertise: 75 }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Java", expertise: 85 },
        { name: "Python", expertise: 80 },
        { name: "JavaScript", expertise: 75 },
        { name: "SQL", expertise: 90 },
        { name: "HTML/CSS", expertise: 70 }
      ]
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Agile", expertise: 95 },
        { name: "Scrum", expertise: 90 },
        { name: "TDD", expertise: 85 },
        { name: "BDD", expertise: 80 },
        { name: "CI/CD", expertise: 85 }
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { name: "JIRA", expertise: 95 },
        { name: "TestRail", expertise: 90 },
        { name: "Git", expertise: 85 },
        { name: "Jenkins", expertise: 80 },
        { name: "Docker", expertise: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
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
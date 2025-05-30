import React from 'react';
import '../styles/Experience.css';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: Job[] = [
    {
      title: "Senior QA Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      location: "Minneapolis, MN",
      description: [
        "Lead a team of 5 QA engineers in implementing automated testing frameworks",
        "Reduced regression testing time by 60% through test automation",
        "Implemented CI/CD pipeline integration with automated testing",
        "Developed and maintained test strategies for multiple enterprise projects"
      ],
      technologies: ["Selenium", "TestNG", "Jenkins", "Docker", "Git", "JIRA"]
    },
    {
      title: "QA Automation Engineer",
      company: "Digital Innovations Corp",
      period: "2019 - 2021",
      location: "St. Paul, MN",
      description: [
        "Designed and implemented automated test suites for web applications",
        "Created and maintained over 1000 automated test cases",
        "Collaborated with developers to improve application testability",
        "Mentored junior QA engineers in test automation best practices"
      ],
      technologies: ["Cypress", "JavaScript", "Python", "REST API", "GitLab"]
    },
    {
      title: "Software QA Engineer",
      company: "Innovative Systems LLC",
      period: "2017 - 2019",
      location: "Minneapolis, MN",
      description: [
        "Performed manual and automated testing for web and mobile applications",
        "Developed test plans and test cases for new features",
        "Identified and tracked software defects using bug tracking tools",
        "Participated in daily scrum meetings and sprint planning"
      ],
      technologies: ["JUnit", "Postman", "SQL", "JIRA", "Agile"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experiences.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="company-info">
                    <span className="company">{job.company}</span>
                    <span className="period">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      {job.period}
                    </span>
                    <span className="location">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {job.location}
                    </span>
                  </div>
                </div>
                <ul className="responsibilities">
                  {job.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <div className="technologies">
                  <h4>Technologies Used</h4>
                  <div className="tech-tags">
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
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

export default Experience; 
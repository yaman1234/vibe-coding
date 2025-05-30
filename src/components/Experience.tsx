import React from 'react';
import '../styles/Experience.css';
import '../styles/common.css';

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
      title: "QA Engineer",
      company: "Javra Software",
      period: "2022 march - Present",
      location: "Nakhkhu, Lalitpur",
      description: [
        "Designed and executed comprehensive test cases to ensure software quality and compliance with requirements.",
        "Logged, tracked, and managed defects through resolution using standard defect management tools.",
        "Performed regression testing to validate the integrity of existing functionality after code changes.",
        "Contributed to automated test script development to improve testing efficiency and coverage.",
        "Collaborated closely with cross-functional development teams to resolve issues and enhance product quality.",
        "Maintained detailed documentation of test plans, test cases, and test results to support transparency and knowledge sharing."
      ],
      technologies: ["Selenium", "TestNG", "Docker", "Git", "JIRA"]
    },
    {
      title: "Security Analyst Intern",
      company: "Security Pal",
      period: "2021 Nov - 2022 Feb",
      location: "Lazimpat, Kathmandu",
      description: [
        "Reviewed client company policy documents to accurately complete security questionnaires.",
        "Ensured responses aligned with client security frameworks and compliance standards.",
        
      ],
      technologies: []
    },
    {
      title: "Computer operator",
      company: "Sudesha School",
      period: "2021 May  - 2022 Feb",
      location: "Nakhkhu, Lalitpur",
      description: [
        "Handled content updates and maintenance of the school’s website.",
        "Managed and updated the school’s social media pages to enhance online presence.",
        "Updated daily academic and administrative data using the Veda App.",
        "Provided technical support to staff and students for computer-related issues."
      ],
      technologies: []
    }
  ];

  return (
    <section id="experience" className="experience-section section-container">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
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
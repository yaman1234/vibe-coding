import React, { useState } from 'react';
import '../styles/Projects.css';
import '../styles/common.css';

interface Project {
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  category: 'Automation' | 'Performance' | 'Security' | 'API';
  image: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      title: "E-commerce Test Automation Framework",
      description: "Developed a comprehensive automated testing framework for a high-traffic e-commerce platform",
      challenges: [
        "Complex user flows and payment integrations",
        "Multiple browser compatibility",
        "Dynamic content handling"
      ],
      solutions: [
        "Implemented Page Object Model design pattern",
        "Created reusable test components",
        "Integrated parallel test execution"
      ],
      technologies: ["Selenium WebDriver", "TestNG", "Java", "Maven", "Jenkins"],
      category: "Automation",
      image: "/project-images/automation.svg"
    },
    {
      title: "API Testing Framework",
      description: "Built an automated API testing framework for microservices architecture",
      challenges: [
        "Complex data dependencies",
        "Authentication handling",
        "Test data management"
      ],
      solutions: [
        "Implemented data-driven testing approach",
        "Created custom test data generators",
        "Developed automated test data cleanup"
      ],
      technologies: ["Postman", "Newman", "JavaScript", "Jenkins", "MongoDB"],
      category: "API",
      image: "/project-images/api.svg"
    },
    {
      title: "Performance Testing Suite",
      description: "Designed and executed performance testing for a cloud-based application",
      challenges: [
        "Simulating high user load",
        "Identifying performance bottlenecks",
        "Real-time monitoring"
      ],
      solutions: [
        "Created realistic user scenarios",
        "Implemented detailed performance metrics",
        "Developed custom reporting dashboard"
      ],
      technologies: ["JMeter", "Grafana", "Docker", "Python", "InfluxDB"],
      category: "Performance",
      image: "/project-images/performance.svg"
    },
    {
      title: "Security Testing Framework",
      description: "Implemented automated security testing for a financial application",
      challenges: [
        "Sensitive data handling",
        "Compliance requirements",
        "Regular security patches"
      ],
      solutions: [
        "Integrated OWASP security tests",
        "Automated vulnerability scanning",
        "Implemented secure test data handling"
      ],
      technologies: ["OWASP ZAP", "Burp Suite", "Python", "Docker", "Jenkins"],
      category: "Security",
      image: "/project-images/security.svg"
    }
  ];

  const categories = ['all', 'Automation', 'Performance', 'Security', 'API'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section section-container">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        
        <div className="project-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-details">
                  <div className="challenges">
                    <h4>Challenges</h4>
                    <ul>
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="solutions">
                    <h4>Solutions</h4>
                    <ul>
                      {project.solutions.map((solution, idx) => (
                        <li key={idx}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
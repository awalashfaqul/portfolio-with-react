import React, { useState, useEffect } from 'react';
import MoreInfoModal from '../components/PortModal';
import './MyPortfolio.css';
import portfolioData from '../data/portfolioData.json';

function MyPortfolio() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch projects from GitHub API
    fetch('https://api.github.com/users/awalashfaqul/repos')
      .then(response => response.json())
      .then(data => {
        // Map over portfolioData and merge with GitHub data
        const mergedProjects = portfolioData.map(portfolioProject => {
          const repoName = portfolioProject.title.replace(/\s+/g, '-').toLowerCase();
          const githubProject = data.find(githubProject => githubProject.name.toLowerCase() === repoName);
          if (githubProject) {
            return {
              ...portfolioProject,
              description: githubProject.description
            };
          }
          return portfolioProject;
        });
        setProjects(mergedProjects);
      });
  }, []);

  const handleMoreInfo = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="my-portfolio">
      <div className="main-column">
        <h2>Project Showcase</h2>
        <p>
          This is my portfolio site where you can explore some of my works and projects that I've been a part of. From development projects to designs, you'll find a variety of skills and creativity showcased here.
        </p>
        <div className="portfolio-grid">
          {projects.map(project => (
            <div className="project" key={project.id}>
              <img src={project.src} alt={project.title} />
              <h3>{project.title}</h3>
              <button onClick={() => handleMoreInfo(project)}>More Info</button>
            </div>
          ))}
        </div>
        <MoreInfoModal show={showModal} onClose={handleCloseModal} project={selectedProject} />
      </div>
    </div>
  );
}

export default MyPortfolio;

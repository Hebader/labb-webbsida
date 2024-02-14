import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Portfolio.css";

const Project = ({ name, description, html_url }) => {
  return (
    <li className="projekt">
      <h2>{name}</h2>
      <div className="column">
  
          <a href={html_url} className="info-button" target="_blank" rel="noopener noreferrer">
            Mer information
          </a>
    
      <div className="modal">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      </div>
    </li>
  );
};

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Hebader/repos');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
      <div className="container">
        <div className="column">
          <h1>Portfolio - Mina GitHub-projekt</h1>
        </div>
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <ul className="projekt-lista">
            {projects.map((project) => (
              <Project
                name={project.name}
                description={project.description}
                html_url={project.html_url}
          
              />
            ))}
          </ul>
        )}
      </div>
  );
};


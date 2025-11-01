// src/components/sections/ProjectCard.jsx

import React from 'react';

function ProjectCard({ project }) { // Desestructuramos la prop 'project'
  return (
    <div className="project-card" style={{ border: '1px solid #ccc', padding: '15px', margin: '15px', borderRadius: '8px' }}>
      
      {/* Puedes usar una etiqueta <img> para la imagen si ya la tienes */}
      {/* <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '4px' }} /> */}
      
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <h4>Tecnologías:</h4>
      <div className="tech-list">
        {project.technologies.map((tech, index) => (
          <span key={index} style={{ 
            display: 'inline-block', 
            marginRight: '8px', 
            background: '#eee', 
            padding: '4px 8px', 
            borderRadius: '4px',
            fontSize: '0.9em'
          }}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links" style={{ marginTop: '15px' }}>
        {/* El atributo target="_blank" abre el enlace en una nueva pestaña */}
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
          Ver Demo en Vivo
        </a>
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          Ver Código (GitHub)
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;
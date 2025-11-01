// src/components/sections/Projects.jsx

import React from 'react';
import projectsData from '../../data/projectsData'; // Importamos el arreglo de datos
import ProjectCard from './ProjectCard'; // Importamos el componente de tarjeta

function Projects() {
  return (
    <section id="projects" style={{ padding: '20px' }}>
      <h2>💻 Mis Proyectos Destacados</h2>
      <p>Estos son algunos de los proyectos que he construido usando tecnologías modernas.</p>
      
      <div className="projects-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        {/* Usamos el método map para iterar sobre el arreglo de proyectos */}
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} // Siempre es necesario un 'key' al usar map()
            project={project} // Pasamos todo el objeto del proyecto como una prop
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
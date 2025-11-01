// src/components/sections/Skills.jsx

import React from 'react';
import skillsData from '../../data/skillsData'; 
import './Skills.css'; // ⬅️ Importa el archivo CSS

function Skills() {
  return (
    // Usamos la clase principal para la sección
    <section id="skills" className="skills-section"> 
      <h2>🛠️ Mis Habilidades Tecnológicas</h2>
      <p>Un resumen de las herramientas y tecnologías que utilizo en mis proyectos.</p>

      <div className="skills-container"> 

        {skillsData.map((group, index) => (
          <div key={index} className="skill-group"> 

            <h3>{group.icon} {group.category}</h3>
            <ul className="skill-list"> 
              {group.list.map((skill, i) => (
                <li key={i} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
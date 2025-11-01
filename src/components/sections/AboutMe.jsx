// src/components/sections/AboutMe.jsx - ¡Versión corregida!

import React from 'react';
import './AboutMe.css'; 

function AboutMe() {
  // ⬅️ ¡LAS VARIABLES DEBEN ESTAR AQUÍ DENTRO!

  const bio = "Soy Mauro, un Desarrollador Full Stack autodidacta e innovador. Me gradué de Digital House con dominio en HTML, CSS, JavaScript, React, Node.js y MySQL. Poseo un nivel avanzado de inglés para colaboración global. Me interesa la tecnología, el deporte, la música, la política y la economía. Estoy listo para aportar valor a su empresa.";
  
  const values = [
    "Aprendizaje Continuo: Siempre busco aprender la última versión de React o una nueva herramienta de backend.",
    "Orientado a Resultados: Mi objetivo es entregar código de calidad que resuelva problemas reales.",
    "Colaboración Efectiva: Me desempeño bien en equipos, utilizando Git para flujos de trabajo eficientes."
  ];

  const experience = [
    { title: "Desarrollador Full Stack", company: "Digital House", years: "2022 - 2023" },
   
  ];

  // AHORA EL CÓDIGO PUEDE ENCONTRAR 'bio' y 'experience'
  return (
    <section id="about" className="about-section"> 
      <h2>👋 Sobre Mí</h2>
      
      <p className="about-bio">{bio}</p> 

      <h3>Mi Filosofía de Trabajo</h3>
      {/* ... mapeo de values ... */}
      
      <hr />
<h3>Experiencia - Educación</h3>
      <div className="experience-list">
        {/*
          ESTE ES EL BLOQUE PROBLEMÁTICO. DEBE DEVOLVER JSX COMPLETO.
        */}
        {experience.map((job, index) => (
          // ⬅️ Este es el contenido que faltaba o estaba incompleto 
          <div key={index} className="experience-item">
            <h4>{job.title}</h4>
            <p>{job.company} | {job.years}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default AboutMe;
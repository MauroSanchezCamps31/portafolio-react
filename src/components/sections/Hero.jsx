import React from 'react';
import './Hero.css'
// ⚠️ Importación clave: Importa el PDF como un módulo para obtener su ruta correcta
import curriculumPDF from '../assets/CV-MSC.pdf'; 

function Hero() {
  const name = "Mauro Sanchez";
  const title = "Desarrollador Web y Programador de Software";
  const tagline = "Construyendo experiencias digitales accesibles y eficientes.";

  // ⚠️ Tu código del enlace estaba aquí, ¡debe ir en el return!
  
  return (
    <section id="home" className="hero-section"> 
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{tagline}</p>
      
      {/* 🟢 Coloca el enlace dentro del return, usando la variable importada */}
      <a 
        href={curriculumPDF} // Usamos la variable importada
        download="CV-MSC.pdf" // Nombre con el que se descarga
        className="btn-cv" // Añade una clase para darle estilo CSS
      >
        Descargar mi Curriculum Vitae
      </a>
      
    </section>
  );
}

export default Hero;
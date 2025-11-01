// src/components/sections/Hero.jsx

import React from 'react';
// Podrías importar tu foto aquí, ejemplo: import profileImage from '../../assets/profile.jpg';

function Hero() {
  const name = "Mauro Sanchez";
  const title = "Desarrollador Web y Programador de Software";
  const tagline = "Construyendo experiencias digitales accesibles y eficientes.";

return (
    <section id="home" className="hero-section"> 
      {/* ⚠️ ¡Asegúrate que no haya texto aquí! */}
      <h1>{name}</h1> {/* Solo debe estar la variable {name} */}
      <h2>{title}</h2>
      {/* ⚠️ ¡O aquí! */}
      <p>{tagline}</p>
      
      {/* ... */}
    </section>
  );
    
}

export default Hero;
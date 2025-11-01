// src/App.js

import React from 'react';

// Importa los estilos globales si los tienes
// import './App.css'; 

// Importa los componentes de la estructura principal
import Navbar from './components/common/Navbar'; 
import Footer from './components/common/Footer';

// Importa los componentes de las secciones
import Hero from './components/sections/Hero'; 
import AboutMe from './components/sections/AboutMe';
import Skills from './components/sections/Skills'; 
import Projects from './components/sections/Projects'; 
import Contact from './components/sections/Contact'; 


function App() {
  return (
    // Contenedor principal para aplicar estilos globales
    <div className="app-container"> 
      
      {/* 1. Encabezado Fijo */}
      <Navbar /> 
      
      {/* 2. Contenido Principal */}
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* 3. Pie de Página */}
      <Footer /> 
      
    </div>
  );
}

// Exportación necesaria para que index.js pueda renderizar la aplicación
export default App;
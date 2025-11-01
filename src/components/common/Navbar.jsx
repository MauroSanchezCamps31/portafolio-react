// src/components/common/Navbar.jsx

import React from 'react';
import './Navbar.css'; // ⬅️ Importa el archivo CSS

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="#home">Mauro Sanchez</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
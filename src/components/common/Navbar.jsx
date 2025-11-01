import React from 'react';
import './Navbar.css'; // ⬅️ Importa el archivo CSS

// Asegúrate de que tu imagen esté en la ruta correcta. 
// Por ejemplo, si está en 'src/assets/profile.jpg'
// Si estás usando Create React App, puedes importarla así:
import profileImage from '../assets/mauroperfil.png'; // **¡CAMBIA ESTA RUTA POR LA REAL!**

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="#home">Mauro Sanchez</a>
      </div>
      
      {/* ⬅️ NUEVO: Contenedor para la foto de perfil */}
      <div className="profile-picture-container">
        <img src={profileImage} alt="Foto de perfil de Mauro Sanchez" className="profile-picture" />
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
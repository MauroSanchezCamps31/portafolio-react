// src/components/common/Footer.jsx

import React from 'react';
import './Footer.css'; 

function Footer() {
  // ⬅️ ¡AÑADE ESTA LÍNEA AQUÍ!
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer-container">
      {/* Ahora 'currentYear' sí está definida */}
      <p>&copy; {currentYear} Mauro Sanchez. Desarrollado con React.</p>
    </footer>
  );
}

export default Footer;
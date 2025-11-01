// src/components/sections/Contact.jsx

import React from 'react';
import './Contact.css'; 

function Contact() {
  // ⬅️ ¡AÑADE ESTA LÍNEA AQUÍ! (Usando tu endpoint real o uno de prueba)
  const formActionUrl = "https://formspree.io/f/TU_ENDPOINT_DE_FORMULARIO"; 

  return (
    <section id="contact" className="contact-section">
      {/* ... */}
      {/* Ahora 'formActionUrl' sí está definida */}
      <form action={formActionUrl} method="POST" className="contact-form">
        {/* ... */}
      </form>
      {/* ... */}
    </section>
  );
}

export default Contact;
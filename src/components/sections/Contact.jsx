import React from 'react';


// --- Definición de Componentes de Iconos SVG ---
// Usamos SVG inline para garantizar que no haya dependencias externas.

const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const WhatsAppIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ fill: '#25D366' }}><path d="M12 2a10 10 0 0 0-7.8 16.2l-.7 2.2 2.3-.6A10 10 0 0 0 12 2z"/><path d="M17.7 15.3c-.2-.4-1.2-.9-1.4-1.1s-.4-.2-.5-.4c-.2-.2-.6-.2-.8-.2s-.6.2-.8.4c-.2.2-.8.8-1 1s-.4.4-.8.2c-2.7-1.4-4.2-3.8-5.3-5.5-.3-.5.2-.8.4-1s.4-.4.5-.6.2-.4.4-.6.2-.4.4-.6.4-.3.6-.4.4-.2.8-.2c.4 0 .7 0 1 .4s.6.9.7 1.1.2.4 0 .6-.2.3-.4.5-.4.5-.6.6-.2.4 0 .5.4.6.9.8c.4.2.7.3 1 .4.2.1.4.1.7.1.3 0 .9-.1 1.2-.4.3-.2.9-.8 1-.9.2-.1.5-.2.9-.2s.8.3 1 .7.2.9.2 1.6 0 1.5-.9 1.8-2.6 1.7-2.7 1.7z"/></svg>
);

const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.2-.27-2.3-1-3.3.25-.5.25-1.1-.1-1.8 0 0-1.4-.2-4.5 1.4A17 17 0 0 0 12 5.51a17 17 0 0 0-3.5-.59c-3.1-1.6-4.5-1.4-4.5-1.4-.35.6-.35 1.3-.1 1.8-.73 1-1.08 2.2-1 3.3 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.22.68-.3 1.38-.3 2.08v4"/></svg>
);

// --- Componente Principal ---
function Contact() {
  // Información de contacto personal
  const whatsappNumber = '2617057408';
  const instagramHandle = 'mausc31';
  const linkedinUrl = 'https://www.linkedin.com/in/mauro-sanchez-camps-916879275/';
  const githubUrl = 'https://github.com/MauroSanchezCamps31';
  
  // 💡 AGREGADO: Tu dirección de correo de Gmail
  const gmailAddress = 'maurosanchezc94@gmail.com'; // ¡DIRECCIÓN DE CORREO REAL AÑADIDA!

  // Links dinámicos
  // ✅ MODIFICADO: Apunta el formulario directamente a tu correo usando la sintaxis Formspree. 
  // Nota: Tras el primer envío exitoso, Formspree enviará un correo a maurosanchezc94@gmail.com para que verifiques la dirección.
  const formActionUrl = `https://formspree.io/f/${gmailAddress}`; // Usa el formato de email que Formspree soporta.
  
  // Si sigues obteniendo el error "Método no soportado", es posible que debas registrar un ID de formulario único en Formspree
  // (e.g., "https://formspree.io/f/xxxxxxx") y usarlo en lugar de la dirección de correo.
  
  const whatsappLink = `https://wa.me/54${whatsappNumber}`; // Asumo prefijo de Argentina (54), lo puedes ajustar si es necesario.

  return (
    <>
      {/* Estilos CSS Embebidos (Tomados de Contact.css) */}
      <style>{`
        /* Definiciones de variables globales no incluidas aquí, asumiendo que existen en otro lugar */
        /* Ejemplo: --primary-color: #007bff; --secondary-color: #343a40; */

        .contact-section {
            padding: 60px 20px;
            background-color: #eef4f7; 
            text-align: center;
        }

        .contact-section h2 {
            font-size: 2.5rem;
            color: var(--secondary-color, #343a40); /* Fallback por si no existe la variable */
            margin-bottom: 10px;
        }

        .contact-section p {
            font-size: 1.1rem;
            color: #6c757d;
            margin-bottom: 30px;
        }

        .contact-content {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
        
        @media (min-width: 768px) {
            .contact-content {
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
            }
        }

        /* --- Estilos del Formulario (Ajustado) --- */

        .contact-form {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 30px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            min-width: 300px;
        }

        .form-input {
            padding: 12px;
            border: 1px solid #ced4da;
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        .form-input:focus {
            border-color: var(--primary-color, #007bff);
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        .form-textarea {
            resize: vertical;
        }

        .btn-submit {
            background-color: var(--primary-color, #007bff);
            color: white;
            padding: 12px 25px;
            font-size: 1.1rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .btn-submit:hover {
            background-color: #0056b3;
        }

        /* --- Estilos de Enlaces Sociales (Nuevo y Mejorado) --- */
        .social-info {
            flex: 1;
            max-width: 300px; /* Limitar el ancho para que no se extienda demasiado */
            padding: 30px;
            background: #f8f9fa;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            text-align: left;
        }

        .social-info h3 {
            font-size: 1.5rem;
            color: var(--secondary-color, #343a40);
            margin-bottom: 20px;
            text-align: center;
        }

        .social-item {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding: 10px;
            border-radius: 6px;
            transition: background-color 0.3s;
        }
        
        .social-item:hover {
            background-color: #e9ecef;
        }

        .social-icon {
            width: 28px;
            height: 28px;
            margin-right: 15px;
            flex-shrink: 0;
        }

        .social-details-container {
            display: flex;
            flex-direction: column;
        }

        .social-label {
            font-weight: 700;
            color: var(--secondary-color, #343a40);
            font-size: 0.95rem;
            margin-bottom: 2px;
        }

        .social-detail-link {
            font-size: 0.9rem;
            color: var(--primary-color, #007bff);
            text-decoration: none;
            word-break: break-word;
        }

        .social-detail-link:hover {
            text-decoration: underline;
        }

        .whatsapp-icon { color: #25D366; }
        .instagram-icon { color: #E1306C; }
        .linkedin-icon { color: #0077B5; }
        .github-icon { color: #333; }
        .gmail-icon { color: #EA4335; } /* Color para el icono de Gmail */
      `}</style>
      
      <section id="contact" className="contact-section">
        <h2>Hablemos de tu próximo proyecto.</h2>
        <p>
          Si tienes una oportunidad, una pregunta o simplemente quieres saludar, no dudes en ponerte en contacto. 
          Puedes usar el formulario o cualquiera de mis enlaces directos.
        </p>
        
        <div className="contact-content">
          
          {/* Columna 1: Formulario de Contacto */}
          <form 
            action={formActionUrl} 
            method="POST" 
            className="contact-form"
          >
            <MailIcon className="social-icon" style={{ alignSelf: 'center', color: 'var(--primary-color, #007bff)' }} />
            <input type="text" name="name" placeholder="Tu Nombre Completo" className="form-input" required />
            {/* El campo `_replyto` es crucial para que Formspree use la dirección de la persona que envía el mensaje */}
            <input type="email" name="_replyto" placeholder="Tu Correo Electrónico" className="form-input" required />
            <textarea name="message" placeholder="Tu Mensaje" rows="5" className="form-input form-textarea" required />
            <button type="submit" className="btn-submit">Enviar Mensaje</button>
            <input type="text" name="_gotcha" style={{display: 'none'}} /> {/* Honeypot para evitar spam */}
          </form>

          {/* Columna 2: Enlaces Sociales y de Contacto */}
          <div className="social-info">
            <h3>O contáctame directamente:</h3>
            
            {/* WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-item">
              <WhatsAppIcon className="social-icon whatsapp-icon" />
              <div className="social-details-container">
                <span className="social-label">WhatsApp (Chat Directo)</span>
                <span className="social-detail-link">{whatsappNumber}</span>
              </div>
            </a>

            {/* Gmail/Email Direct Link */}
            <a href={`mailto:${gmailAddress}`} className="social-item">
              <MailIcon className="social-icon gmail-icon" />
              <div className="social-details-container">
                <span className="social-label">Correo Electrónico (Gmail)</span>
                <span className="social-detail-link">{gmailAddress}</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-item">
              <LinkedinIcon className="social-icon linkedin-icon" />
              <div className="social-details-container">
                <span className="social-label">LinkedIn</span>
                <span className="social-detail-link">/mauro-sanchez-camps</span>
              </div>
            </a>

            {/* GitHub */}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-item">
              <GithubIcon className="social-icon github-icon" />
              <div className="social-details-container">
                <span className="social-label">GitHub</span>
                <span className="social-detail-link">MauroSanchezCamps31</span>
              </div>
            </a>

            {/* Instagram */}
            <a href={`https://www.instagram.com/${instagramHandle}`} target="_blank" rel="noopener noreferrer" className="social-item">
              <InstagramIcon className="social-icon instagram-icon" />
              <div className="social-details-container">
                <span className="social-label">Instagram</span>
                <span className="social-detail-link">@{instagramHandle}</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

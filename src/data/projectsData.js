// src/data/projectsData.js

const projects = [
  {
    id: 1,
    title: "Plataforma de E-commerce (React & Node)",
    description: "Una solución completa de comercio electrónico que incluye carrito de compras, pasarela de pago y panel de administración.",
    image: "/images/ecommerce-mockup.png", // La imagen debe estar en la carpeta 'public'
    technologies: ["React", "Redux", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://demo-ecommerce.netlify.app",
    repoUrl: "https://github.com/tu-usuario/ecommerce-repo",
  },
  {
    id: 2,
    title: "Clon de Trello (Next.js)",
    description: "Implementación de un sistema de gestión de tareas con arrastrar y soltar (drag-and-drop) y persistencia de datos.",
    image: "/images/trello-clone.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://trello-clone-pro.vercel.app",
    repoUrl: "https://github.com/tu-usuario/trello-clone",
  },
  // ¡Añade más proyectos aquí! La clave es la CALIDAD, no la cantidad.
];

export default projects;
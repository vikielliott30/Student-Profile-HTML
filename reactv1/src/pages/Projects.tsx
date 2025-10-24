import React from 'react';
import './Projects.scss';

interface Project {
  title: string;
  description: string;
  cssClass: string;
  tags: string[];
  developer: string;
}

const Projects: React.FC = () => {
  const projectsStudent1: Project[] = [
    {
      title: 'Sistema de Gestión de Hoteles',
      cssClass: 'gestion-hoteles',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      developer: 'Leonardo Morabito',
      description: 'Una aplicación para gestionar reservas y habitaciones de un hotel.'
    },
    {
      title: 'Plataforma E-commerce',
      cssClass: 'ecommerce',
      tags: ['React', 'Express', 'PostgreSQL'],
      developer: 'Leonardo Morabito',
      description: 'Una plataforma completa para la venta de productos en línea.'
    },
  ];

  const projectsStudent2: Project[] = [
    {
      title: 'Aplicación de Bienestar',
      cssClass: 'bienestar',
      tags: ['React Native', 'Firebase'],
      developer: 'Victoria Elliott',
      description: 'Una app móvil para seguimiento de hábitos saludables.'
    },
    {
      title: 'Sistema de Reservas',
      cssClass: 'reservas',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      developer: 'Victoria Elliott',
      description: 'Una aplicación web para gestionar reservas en restaurantes.'
    },
  ];

  const allProjects = [...projectsStudent1, ...projectsStudent2];

  return (
    <main className="container">
      <section className="projects-section" id="proyectos" aria-labelledby="titulo-proyectos">
        <h2 id="titulo-proyectos" className="section-title">Proyectos Destacados</h2>

        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.developer}</p>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="project-tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {allProjects.length === 0 && (
            <div className="no-projects">
              <p>No hay proyectos cargados en este momento.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;

import React from 'react';
import leoImage from '../assets/images/leo.jpg';
import micheImage from '../assets/images/miche.jpeg';
import heroImage from '../assets/images/hero.png';

const Curriculum: React.FC = () => {
  const Student1 = {
    name: 'Leonardo Morabito',
    avatar: leoImage,
    role: 'Estudiante de Ingeniería en Sistemas',
    email: 'leonardomorabito02@gmail.com',
    tel: '+54 9 351 394 1076',
    github: 'leomorabito02',
  };

  const Student2 = {
    name: 'Victoria Elliott',
    avatar: micheImage,
    role: 'Estudiante de Ingeniería en Sistemas',
    email: 'vikielliott30@gmail.com',
    tel: '+54 9 3521 43-9947',
    github: 'vikielliott30',
  };

  return (
    <div className="main-container">
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.7), rgba(16, 42, 90, 0.75)), url(${heroImage})` }}>
        <div className="container hero-inner">
          <h1>Desarrolladores Full Stack</h1>
          <p className="lead">Conoce el talento y los proyectos de nuestros futuros ingenieros</p>
          <p className="lead">Universidad Católica de Córdoba</p>
        </div>
      </section>

      <main className="container">
        <section id="perfiles" className="profiles-section">
          <div className="section-header">
            <h2 className="section-title">Nuestro Equipo</h2>
            <p>Conoce a los talentosos estudiantes de Ingeniería de Sistemas que están formando el futuro de la tecnología.</p>
          </div>

          <div className="profiles-container">
            <article className="profile-card" aria-labelledby="profile-1-name">
              <div className="profile-header">
                <img
                  src={Student1.avatar}
                  alt={`${Student1.name} - Foto de perfil`}
                  className="profile-avatar"
                  loading="lazy"
                />
                <div className="profile-info">
                  <h3 id="profile-1-name">{Student1.name}</h3>
                  <div className="role">{Student1.role}</div>
                </div>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="contact-label">Email:</span>
                  <a href={`mailto:${Student1.email}`}>{Student1.email}</a>
                </div>

                <div className="contact-item">
                  <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="contact-label">Teléfono:</span>
                  <a href={`tel:${Student1.tel}`}>{Student1.tel}</a>
                </div>

                {Student1.github && (
                  <div className="contact-item">
                    <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                    </svg>
                    <span className="contact-label">GitHub:</span>
                    <a href={`https://github.com/${Student1.github}`} target="_blank" rel="noreferrer">
                      {Student1.github}
                    </a>
                  </div>
                )}
              </div>

              <div className="profile-description">
                <p>
                  Estudiante avanzado de ingeniería de sistemas, con pasión por el desarrollo continuo y el despliegue continuo.
                  Especializado en tecnologías modernas y metodologías ágiles.
                </p>
              </div>
            </article>

            <article className="profile-card" aria-labelledby="profile-2-name">
              <div className="profile-header">
                <img
                  src={Student2.avatar}
                  alt={`${Student2.name} - Foto de perfil`}
                  className="profile-avatar"
                  loading="lazy"
                />
                <div className="profile-info">
                  <h3 id="profile-2-name">{Student2.name}</h3>
                  <div className="role">{Student2.role}</div>
                </div>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="contact-label">Email:</span>
                  <a href={`mailto:${Student2.email}`}>{Student2.email}</a>
                </div>

                <div className="contact-item">
                  <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="contact-label">Teléfono:</span>
                  <a href={`tel:${Student2.tel}`}>{Student2.tel}</a>
                </div>

                {Student2.github && (
                  <div className="contact-item">
                    <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                    </svg>
                    <span className="contact-label">GitHub:</span>
                    <a href={`https://github.com/${Student2.github}`} target="_blank" rel="noreferrer">
                      {Student2.github}
                    </a>
                  </div>
                )}
              </div>

              <div className="profile-description">
                <p>
                  Estudiante avanzado de ingeniería de sistemas, con pasión por el desarrollo continuo y el despliegue continuo.
                  Enfocado en la innovación y las mejores prácticas del desarrollo de software.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Curriculum;
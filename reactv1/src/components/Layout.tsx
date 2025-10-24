import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './Layout.scss';

const Layout: React.FC = () => {
  const { isLoggedIn, login, logout } = useAuth();

  const onToggleAuth = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };

  return (
    <>
      <header>
        <div className="topbar">
          <div className="principalDiv">
            <div className="logo" aria-hidden="true"><strong>CV</strong></div>
            
          </div>

          <nav aria-label="Principal">
            <ul>
              <li><Link to="/">Datos personales</Link></li>
              <li><Link to="/proyectos">Proyectos</Link></li>
              <li><Link to="/service-http-component">Arte</Link></li>

              {isLoggedIn && (
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
              )}
              <li>
                <button
                  className={`auth-btn ${isLoggedIn ? 'logout' : ''}`}
                  type="button"
                  onClick={onToggleAuth}
                >
                  {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="contenido" className="container" tabIndex={-1}>
        <Outlet />
      </main>

      <footer>
        <div className="container">
          <p>© 2025 Portafolio de Estudiantes de Ingeniería de Sistemas</p>
          <p>Universidad Católica de Córdoba - Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
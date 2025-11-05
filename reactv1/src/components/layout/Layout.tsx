import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthHook';
import './Layout.scss';

const Layout: React.FC = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { name: "Datos personales", path: "/", auth: false },
    { name: "Proyectos", path: "/proyectos", auth: false },
    { name: "Arte", path: "/service-http-component", auth: false },
    { name: "Usuarios", path: "/service-http-users", auth: false },
    { name: "Contacto", path: "/contacto", auth: true },
    { name: "Logout", path: "/logout", auth: true }
  ];

  const goTo = (path: string) => {
    if (path === "/logout" && user) {
      logout();
      navigate("/");
      return;
    }
    navigate(path);
  };

  const handleLogin = () => {
    // Simular login - mantener en la misma página
    if (login) {
      login(1, "Usuario", "usuario@example.com");
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
              {items.map((item) =>
                item.name === "Logout" ? (
                  user ? (
                    <li key={item.name}>
                      <button
                        className="auth-btn logout"
                        type="button"
                        onClick={() => goTo(item.path)}
                      >
                        Cerrar sesión
                      </button>
                    </li>
                  ) : null
                ) : item.auth ? (
                  user ? (
                    <li key={item.name}>
                      <button
                        className={`nav-item ${location.pathname === item.path ? "selected" : ""}`}
                        type="button"
                        onClick={() => goTo(item.path)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                ) : (
                  <li key={item.name}>
                    <button
                      className={`nav-item ${location.pathname === item.path ? "selected" : ""}`}
                      type="button"
                      onClick={() => goTo(item.path)}
                    >
                      {item.name}
                    </button>
                  </li>
                )
              )}
              
              {!user ? (
                <li>
                  <button
                    className="auth-btn"
                    type="button"
                    onClick={handleLogin}
                  >
                    Iniciar sesión
                  </button>
                </li>
              ) : null}
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
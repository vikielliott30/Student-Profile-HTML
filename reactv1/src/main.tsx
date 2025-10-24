import './index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Curriculum from './pages/Curriculum';
import Form from './pages/Form';
import Projects from './pages/Projects';
import ServiceHttpComponent from './pages/ServiceHttpComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Curriculum /> },
      { path: 'proyectos', element: <Projects /> },
      { path: 'service-http-component', element: <ServiceHttpComponent /> },
      { path: 'contacto', element: <Form /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
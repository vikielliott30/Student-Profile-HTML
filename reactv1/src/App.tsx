import './index.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';
import PrivateRoute from './components/layout/PrivateRoute'
import Curriculum from './pages/curriculum/Curriculum';
import Form from './pages/form/Form';
import Projects from './pages/projects/Projects';
import ServiceHttpComponent from './pages/httpComponent/ServiceHttpComponent';
import ServiceHttpUsers from './pages/httpUsers/ServiceHttpUsers';

function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
          {/* Public routes - accessible to everyone */}
          <Route path="/" element={<Curriculum />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/service-http-component" element={<ServiceHttpComponent />} />
          <Route path="/service-http-users" element={<ServiceHttpUsers />} />

          {/* Private routes - only for logged in users */}
          <Route element={<PrivateRoute />}>
            <Route path="/contacto" element={<Form />} />
          </Route>
        </Route>
    </Routes>
    );
}
export default App

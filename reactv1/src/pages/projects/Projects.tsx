import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Box,
  Avatar,
  Divider,
  IconButton,
  Tooltip,
  Fab
} from '@mui/material';
import {
  Code,
  Person,
  GitHub,
  Launch,
  Refresh
} from '@mui/icons-material';
import './Projects.scss';

interface Project {
  title: string;
  description: string;
  cssClass: string;
  tags: string[];
  developer: string;
  repository?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const projectsStudent1: Project[] = [
    {
      title: 'Sistema de Gestión de Hoteles',
      cssClass: 'gestion-hoteles',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      developer: 'Leonardo Morabito',
      description: 'Una aplicación para gestionar reservas y habitaciones de un hotel.',
      repository: 'https://github.com/leomorabito02/hotel-management',
      demo: 'https://hotel-management-demo.com'
    },
    {
      title: 'Plataforma E-commerce',
      cssClass: 'ecommerce',
      tags: ['React', 'Express', 'PostgreSQL'],
      developer: 'Leonardo Morabito',
      description: 'Una plataforma completa para la venta de productos en línea.',
      repository: 'https://github.com/leomorabito02/ecommerce-platform',
      demo: 'https://ecommerce-demo.com'
    },
  ];

  const projectsStudent2: Project[] = [
    {
      title: 'Aplicación de Bienestar',
      cssClass: 'bienestar',
      tags: ['React Native', 'Firebase'],
      developer: 'Victoria Elliott',
      description: 'Una app móvil para seguimiento de hábitos saludables.',
      repository: 'https://github.com/vikielliott30/wellness-app',
      demo: 'https://wellness-demo.com'
    },
    {
      title: 'Sistema de Reservas',
      cssClass: 'reservas',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      developer: 'Victoria Elliott',
      description: 'Una aplicación web para gestionar reservas en restaurantes.',
      repository: 'https://github.com/vikielliott30/reservation-system',
      demo: 'https://reservations-demo.com'
    },
  ];

  const allProjects = [...projectsStudent1, ...projectsStudent2];

  const getProjectColor = (index: number) => {
    const colors = [
      '#1976d2', '#388e3c', '#f57c00', '#d32f2f', 
      '#7b1fa2', '#303f9f', '#0288d1', '#689f38'
    ];
    return colors[index % colors.length];
  };

  const getDeveloperInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const refreshProjects = () => {
    window.location.reload();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Proyectos Destacados
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Conoce los proyectos desarrollados por nuestros estudiantes de Ingeniería de Sistemas
        </Typography>
      </Box>

      {/* Botón de refresh flotante */}
      <Fab
        color="primary"
        aria-label="refresh"
        onClick={refreshProjects}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        <Refresh />
      </Fab>

      <div className="projects-grid">
        {allProjects.map((project, index) => (
          <Card
            key={index}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              {/* Header con Avatar y Título */}
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  sx={{
                    bgcolor: getProjectColor(index),
                    width: 56,
                    height: 56,
                    mr: 2,
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}
                >
                  {getDeveloperInitials(project.developer)}
                </Avatar>
                <Box flexGrow={1}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Person fontSize="small" color="action" sx={{ mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {project.developer}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Descripción */}
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                {project.description}
              </Typography>

              {/* Tags */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <Code fontSize="small" sx={{ mr: 0.5 }} />
                  Tecnologías:
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      variant="outlined"
                      color="primary"
                      sx={{
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: 2
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Botones de acción */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  {project.repository && (
                    <Tooltip title="Ver repositorio">
                      <IconButton
                        color="primary"
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <GitHub />
                      </IconButton>
                    </Tooltip>
                  )}
                  {project.demo && (
                    <Tooltip title="Ver demo">
                      <IconButton
                        color="secondary"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <Launch />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>
                <Chip
                  label={`Proyecto ${index + 1}`}
                  size="small"
                  color="default"
                  variant="filled"
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>

      {allProjects.length === 0 && (
        <Box textAlign="center" mt={8}>
          <Typography variant="h6" color="text.secondary">
            No hay proyectos cargados en este momento.
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Próximamente se agregarán más proyectos increíbles.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Projects;

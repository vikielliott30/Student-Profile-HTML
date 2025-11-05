import React from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Grid,
  Divider,
  Fade,
  Zoom
} from '@mui/material';
import {
  Email,
  Phone,
  GitHub,
  School,
  Code,
  LocationCity,
  Person,
  Launch
} from '@mui/icons-material';
import leoImage from '../../assets/images/leo.jpg';
import micheImage from '../../assets/images/miche.jpeg';
import './Curriculum.scss';

const Curriculum: React.FC = () => {
  const Student1 = {
    name: 'Leonardo Morabito',
    avatar: leoImage,
    role: 'Estudiante de Ingeniería de Sistemas',
    email: 'leonardomorabito02@gmail.com',
    tel: '+54 9 351 394 1076',
    github: 'leomorabito02',
    description: 'Estudiante avanzado de ingeniería de sistemas, con pasión por el desarrollo continuo y el despliegue continuo. Especializado en tecnologías modernas y metodologías ágiles.',
    skills: ['React', 'TypeScript', 'Node.js', 'CI/CD']
  };

  const Student2 = {
    name: 'Victoria Elliott',
    avatar: micheImage,
    role: 'Estudiante de Ingeniería de Sistemas',
    email: 'vikielliott30@gmail.com',
    tel: '+54 9 3521 43-9947',
    github: 'vikielliott30',
    description: 'Estudiante avanzado de ingeniería de sistemas, con pasión por el desarrollo continuo y el despliegue continuo. Enfocado en la innovación y las mejores prácticas del desarrollo de software.',
    skills: ['JavaScript', 'Python', 'SQL', 'UX/UI']
  };
  const ContactItem = ({ icon, label, value, href, isExternal = false }: {
    icon: React.ReactElement;
    label: string;
    value: string;
    href?: string;
    isExternal?: boolean;
  }) => (
    <Box display="flex" alignItems="center" mb={1.5}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          p: 0.8,
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& svg': {
            color: 'white',
            fontSize: 18
          }
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block">
          {label}
        </Typography>
        {href ? (
          <Typography
            component="a"
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            variant="body2"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            {value}
            {isExternal && <Launch sx={{ ml: 0.5, fontSize: 14 }} />}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.primary">
            {value}
          </Typography>
        )}
      </Box>
    </Box>
  );

  const StudentCard = ({ student, index }: { student: typeof Student1; index: number }) => (
    <Zoom in={true} timeout={500 + index * 200}>
      <Card className="student-card" elevation={4}>
        <CardContent sx={{ p: 3 }}>
          {/* Header Section */}
          <Box display="flex" alignItems="center" mb={3}>
            <Avatar
              src={student.avatar}
              alt={student.name}
              sx={{
                width: 80,
                height: 80,
                mr: 2,
                border: '3px solid',
                borderColor: 'primary.main'
              }}
            />
            <Box flex={1}>
              <Typography variant="h5" component="h3" fontWeight={600} color="primary.main">
                {student.name}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <School sx={{ mr: 1, fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {student.role}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Contact Information */}
          <Box mb={3}>
            <Typography variant="h6" gutterBottom color="text.primary" fontWeight={600}>
              <Person sx={{ mr: 1, verticalAlign: 'middle' }} />
              Información de Contacto
            </Typography>
            
            <ContactItem
              icon={<Email />}
              label="Email"
              value={student.email}
              href={`mailto:${student.email}`}
            />
            
            <ContactItem
              icon={<Phone />}
              label="Teléfono"
              value={student.tel}
              href={`tel:${student.tel}`}
            />
            
            <ContactItem
              icon={<GitHub />}
              label="GitHub"
              value={student.github}
              href={`https://github.com/${student.github}`}
              isExternal={true}
            />
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Skills Section */}
          <Box mb={3}>
            <Typography variant="h6" gutterBottom color="text.primary" fontWeight={600}>
              <Code sx={{ mr: 1, verticalAlign: 'middle' }} />
              Tecnologías
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {student.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Description */}
          <Box>
            <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
              {student.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Zoom>
  );
  return (
    <Box className="curriculum-container">
      {/* Hero Section with Integrated Team */}
      <Box
        className="hero-section"
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 50%, #9c27b0 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Hero Header */}
          <Fade in={true} timeout={1000}>
            <Box textAlign="center" py={6}>
              <Typography variant="h2" component="h1" fontWeight={700} mb={2}>
                Desarrolladores Full Stack
              </Typography>
              <Typography variant="h5" mb={2} sx={{ opacity: 0.9 }}>
                Conoce el talento y los proyectos de nuestros futuros ingenieros
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
                <LocationCity sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight={500}>
                  Universidad Católica de Córdoba
                </Typography>
              </Box>
            </Box>
          </Fade>

          {/* Team Section within Hero */}
          <Box flex={1} display="flex" flexDirection="column" justifyContent="center" pb={4}>
            <Fade in={true} timeout={800}>
              <Box textAlign="center" mb={4}>
                <Typography variant="h4" component="h2" fontWeight={600} mb={2} sx={{ color: 'white' }}>
                  Nuestro Equipo
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
                  Conoce a los talentosos estudiantes de Ingeniería de Sistemas que están formando el futuro de la tecnología.
                </Typography>
              </Box>
            </Fade>

            {/* Student Profiles */}
            <Grid container spacing={4} justifyContent="center">
              <Grid size={{ xs: 12, md: 6, lg: 5 }}>
                <StudentCard student={Student1} index={0} />
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 5 }}>
                <StudentCard student={Student2} index={1} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Curriculum;

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  CircularProgress,
  Alert,
  Container,
  Divider,
  IconButton,
  Tooltip,
  Fab
} from '@mui/material';
import {
  Email,
  Phone,
  Language,
  LocationOn,
  Business,
  Person,
  Refresh
} from '@mui/icons-material';
import { useUsers } from '../../hooks/useUsers';
import type { ApiUser } from '../../Types/ApiUser';
import './ServiceHttpUsers.scss';

const ServiceHttpUsers: React.FC = () => {
  const { users, loading, error, refreshUsers } = useUsers();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (id: number) => {
    const colors = [
      '#1976d2', '#388e3c', '#f57c00', '#d32f2f', 
      '#7b1fa2', '#303f9f', '#0288d1', '#689f38'
    ];
    return colors[id % colors.length];
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress size={60} />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Lista de Usuarios
      </Typography>
      
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Datos obtenidos desde JSONPlaceholder API ({users.length} usuarios)
      </Typography>

      {/* Botón de refresh flotante */}
      <Fab
        color="primary"
        aria-label="refresh"
        onClick={refreshUsers}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        <Refresh />
      </Fab>

      {/* Grid CSS en lugar de Material-UI Grid */}
      <div className="users-grid">
        {users.map((user: ApiUser) => (
          <Card 
            key={user.id}
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              {/* Header con Avatar y Nombre */}
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  sx={{
                    bgcolor: getAvatarColor(user.id),
                    width: 56,
                    height: 56,
                    mr: 2,
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}
                >
                  {getInitials(user.name)}
                </Avatar>
                <Box>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {user.name}
                  </Typography>
                  <Chip
                    icon={<Person />}
                    label={user.username}
                    size="small"
                    variant="outlined"
                    color="primary"
                  />
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Información de contacto */}
              <Box sx={{ mb: 2 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Tooltip title="Email">
                    <IconButton size="small" color="primary">
                      <Email fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Typography variant="body2" sx={{ ml: 1, wordBreak: 'break-word' }}>
                    {user.email}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={1}>
                  <Tooltip title="Teléfono">
                    <IconButton size="small" color="primary">
                      <Phone fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {user.phone}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={1}>
                  <Tooltip title="Sitio web">
                    <IconButton size="small" color="primary">
                      <Language fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {user.website}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Información de ubicación */}
              <Box sx={{ mb: 2 }}>
                <Box display="flex" alignItems="flex-start" mb={1}>
                  <Tooltip title="Dirección">
                    <IconButton size="small" color="secondary" sx={{ mt: -0.5 }}>
                      <LocationOn fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Box sx={{ ml: 1 }}>
                    <Typography variant="body2">
                      {user.address.street}, {user.address.suite}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.address.city} - {user.address.zipcode}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Información de la empresa */}
              <Box>
                <Box display="flex" alignItems="flex-start">
                  <Tooltip title="Empresa">
                    <IconButton size="small" color="success" sx={{ mt: -0.5 }}>
                      <Business fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Box sx={{ ml: 1 }}>
                    <Typography variant="body2" fontWeight="bold">
                      {user.company.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {user.company.catchPhrase}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      {user.company.bs}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>

      {users.length === 0 && !loading && (
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mt: 4 }}>
          No se encontraron usuarios.
        </Typography>
      )}
    </Container>
  );
};

export default ServiceHttpUsers;

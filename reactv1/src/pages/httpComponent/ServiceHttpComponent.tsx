import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
  Stack,
  Chip,
  Fab,
  Skeleton
} from '@mui/material';
import {
  NavigateBefore,
  NavigateNext,
  Palette,
  Refresh
} from '@mui/icons-material';
import { useArtworks } from '../../hooks/useArtworks';
import ArtItem from '../../components/ArtItem';
import './ServiceHttpComponent.scss';

const ServiceHttpComponent: React.FC = () => {
  const { page, maxPages, artworks, isLoading, nextPage, prevPage } = useArtworks();

  const refreshArtworks = () => {
    window.location.reload();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Palette sx={{ mr: 1, fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" color="primary">
            Galería de Arte
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary">
          Obras de arte desde la API del Art Institute of Chicago
        </Typography>
        <Box mt={2} display="flex" justifyContent="center" gap={2}>
          <Chip
            label={`Página ${page} de ${maxPages}`}
            color="primary"
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Botón de refresh flotante */}
      <Fab
        color="primary"
        aria-label="refresh"
        onClick={refreshArtworks}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        <Refresh />
      </Fab>

      {/* Loading skeleton */}
      {isLoading && (
        <Box>
          <Stack spacing={2}>
            {[1, 2].map((item) => (
              <Skeleton
                key={item}
                variant="rectangular"
                height={400}
                sx={{ borderRadius: 2 }}
              />
            ))}
          </Stack>
        </Box>
      )}

      {/* Items container */}
      {!isLoading && (
        <div className="artworks-grid">
          {artworks.map((item) => (
            <ArtItem key={item.id} inputValue={item} />
          ))}
        </div>
      )}

      {/* Navigation */}
      {!isLoading && artworks.length > 0 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={4}
          sx={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            p: 2,
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              startIcon={<NavigateBefore />}
              onClick={prevPage}
              disabled={isLoading || page === 1}
              sx={{
                minWidth: 140,
                '&:hover': {
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Anterior
            </Button>

            <Box sx={{ mx: 2 }}>
              <Typography variant="h6" color="primary" textAlign="center">
                {page}
              </Typography>
              <Typography variant="caption" color="text.secondary" textAlign="center">
                de {maxPages}
              </Typography>
            </Box>

            <Button
              variant="outlined"
              endIcon={<NavigateNext />}
              onClick={nextPage}
              disabled={isLoading || page === maxPages}
              sx={{
                minWidth: 140,
                '&:hover': {
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Siguiente
            </Button>
          </Stack>
        </Box>
      )}

      {/* Loading indicator */}
      {isLoading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress size={60} thickness={4} />
        </Box>
      )}

      {/* Empty state */}
      {!isLoading && artworks.length === 0 && (
        <Box textAlign="center" mt={8}>
          <Palette sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No se encontraron obras de arte
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Intenta recargar la página o verifica tu conexión a internet.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ServiceHttpComponent;

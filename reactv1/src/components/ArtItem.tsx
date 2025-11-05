import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Fade
} from '@mui/material';
import {
  Palette,
  LocationOn,
  Info
} from '@mui/icons-material';
import type { Artwork } from '../models/artwork.model';
import './ArtItem.scss';

interface ArtItemProps {
  inputValue: Artwork;
}

const ArtItem: React.FC<ArtItemProps> = ({ inputValue }) => {
  const getDescription = (): string => {
    return inputValue?.description || 'No description available.';
  };

  const getCleanDescription = (html: string): string => {
    // Remove HTML tags and limit length
    const text = html.replace(/<[^>]*>/g, '');
    return text.length > 200 ? text.substring(0, 200) + '...' : text;
  };

  return (
    <Fade in={true} timeout={300}>
      <Card className="art-item-card" elevation={3}>
        <CardContent sx={{ p: 3 }}>
          {/* Header with ID and icon */}
          <Box display="flex" alignItems="center" mb={2}>
            <Palette sx={{ mr: 1, color: 'primary.main' }} />
            <Chip
              label={`ID: ${inputValue?.id}`}
              size="small"
              color="primary"
              variant="outlined"
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'primary.main',
              lineHeight: 1.3,
              mb: 2
            }}
          >
            {inputValue?.title || 'Título no disponible'}
          </Typography>

          {/* Origin */}
          {inputValue?.place_of_origin && (
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOn sx={{ mr: 1, fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {inputValue.place_of_origin}
              </Typography>
            </Box>
          )}

          {/* Description */}
          <Box display="flex" alignItems="flex-start" mb={2}>
            <Info sx={{ mr: 1, fontSize: 18, color: 'text.secondary', mt: 0.2 }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              {getCleanDescription(getDescription())}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default ArtItem;

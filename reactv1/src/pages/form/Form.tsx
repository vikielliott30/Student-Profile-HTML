import './Form.scss';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Alert,
  Box,
  FormHelperText,
  CircularProgress,
  Chip
} from '@mui/material';
import {
  Send,
  CheckCircle,
  Person,
  Email,
  Subject,
  Message
} from '@mui/icons-material';

const motivos = ['consulta', 'soporte', 'presupuesto'];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FormWithReactHookForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onChange' // Validación en tiempo real
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Aquí harías la llamada real a tu API
      console.log('Datos del formulario:', data);
      
      setSent(true);
      reset(); // Limpiar el formulario
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error al enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Formulario de Contacto
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Contáctanos usando Material-UI y React Hook Form
          </Typography>
        </Box>
        
        {sent && (
          <Alert 
            severity="success" 
            sx={{ mb: 3 }}
            icon={<CheckCircle />}
          >
            ¡Gracias! Tu mensaje fue enviado correctamente.
          </Alert>
        )}
        
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Nombre */}
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'El nombre es requerido',
              minLength: {
                value: 3,
                message: 'Debe tener al menos 3 caracteres'
              },
              maxLength: {
                value: 60,
                message: 'Debe tener máximo 60 caracteres'
              },
              pattern: {
                value: /^[a-zA-ZÀ-ÿ\s]+$/,
                message: 'Solo se permiten letras y espacios'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Nombre"
                placeholder="Tu nombre completo"
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: <Person sx={{ color: 'action.active', mr: 1 }} />
                }}
              />
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'El email es requerido',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email inválido'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type="email"
                label="Email"
                placeholder="tu@email.com"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: <Email sx={{ color: 'action.active', mr: 1 }} />
                }}
              />
            )}
          />

          {/* Motivo */}
          <Controller
            name="subject"
            control={control}
            rules={{
              required: 'Selecciona un motivo'
            }}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.subject} sx={{ mb: 3 }}>
                <InputLabel id="subject-label">
                  <Box display="flex" alignItems="center">
                    <Subject sx={{ mr: 1 }} />
                    Motivo
                  </Box>
                </InputLabel>
                <Select
                  {...field}
                  labelId="subject-label"
                  label="Motivo"
                >
                  {motivos.map((motivo) => (
                    <MenuItem key={motivo} value={motivo}>
                      <Chip 
                        label={motivo[0].toUpperCase() + motivo.slice(1)} 
                        size="small" 
                        variant="outlined" 
                      />
                    </MenuItem>
                  ))}
                </Select>
                {errors.subject && (
                  <FormHelperText>{errors.subject.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />

          {/* Mensaje */}
          <Controller
            name="message"
            control={control}
            rules={{
              required: 'El mensaje es requerido',
              minLength: {
                value: 10,
                message: 'Mínimo 10 caracteres'
              },
              maxLength: {
                value: 500,
                message: 'Máximo 500 caracteres'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                multiline
                rows={4}
                label="Mensaje"
                placeholder="Escribe tu mensaje aquí..."
                error={!!errors.message}
                helperText={errors.message?.message || `${field.value.length}/500 caracteres`}
                sx={{ mb: 4 }}
                InputProps={{
                  startAdornment: <Message sx={{ color: 'action.active', mr: 1, alignSelf: 'flex-start', mt: 1 }} />
                }}
              />
            )}
          />

          {/* Botón de envío */}
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
              sx={{ 
                px: 4, 
                py: 1.5,
                borderRadius: 2,
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormWithReactHookForm;

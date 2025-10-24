import './Form.scss';
import React, { useState } from 'react';

const motivos = ['consulta', 'soporte', 'presupuesto'];

const Form: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = { name: '', email: '', subject: '', message: '' };
    if (!form.name || form.name.length < 3 || form.name.length > 60) {
      newErrors.name = 'Debe tener entre 3 y 60 letras.';
    }
    if (!form.email) {
      newErrors.email = 'El email es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Email inválido.';
    }
    if (!form.subject) {
      newErrors.subject = 'Seleccioná un motivo.';
    }
    if (!form.message || form.message.length < 10) {
      newErrors.message = 'Mínimo 10 caracteres.';
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => v === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!validate()) {
      setIsSubmitting(false);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="contactForm" aria-labelledby="titulo-contacto">
      <div className='div-titulo-contacto'> <h2 id="titulo-contacto">Formulario de contacto</h2></div>
      {sent && (
        <div className="success" role="status">¡Gracias! Tu mensaje fue enviado.</div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        {/* Nombre */}
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            autoComplete="name"
            className={errors.name ? 'is-invalid' : ''}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'err-name' : undefined}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div id="err-name" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">⚠️</span>
              <span>{errors.name}</span>
            </div>
          )}
        </div>
        {/* Email */}
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            autoComplete="email"
            className={errors.email ? 'is-invalid' : ''}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div id="err-email" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">⚠️</span>
              <span>{errors.email}</span>
            </div>
          )}
        </div>
        {/* Motivo */}
        <div className="field">
          <label htmlFor="subject">Motivo</label>
          <select
            id="subject"
            name="subject"
            className={errors.subject ? 'is-invalid' : ''}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'err-subject' : undefined}
            value={form.subject}
            onChange={handleChange}
          >
            <option value="" disabled>-- Selecciona un motivo --</option>
            {motivos.map((motivo) => (
              <option key={motivo} value={motivo}>{motivo[0].toUpperCase() + motivo.slice(1)}</option>
            ))}
          </select>
          {errors.subject && (
            <div id="err-subject" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">⚠️</span>
              <span>{errors.subject}</span>
            </div>
          )}
        </div>
        {/* Mensaje */}
        <div className="field">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Escribe tu mensaje aquí..."
            className={errors.message ? 'is-invalid' : ''}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'err-message' : undefined}
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div id="err-message" className="alert alert-error bubble" role="alert" aria-live="assertive">
              <span className="alert-icon" aria-hidden="true">⚠️</span>
              <span>{errors.message}</span>
            </div>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>Enviar</button>
      </form>
    </section>
  );
};

export default Form;

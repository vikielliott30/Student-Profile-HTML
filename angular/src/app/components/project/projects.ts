import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definición de la interfaz del proyecto para garantizar el tipado
interface Project {
  title: string;
  description: string;
  cssClass: string;
  tags: string[];
  developer: string;
}

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsPageComponent {
  
  // Aquí es donde defines los datos de los proyectos
  projectsStudent1: Project[] = [
    {
      title: 'Sistema de Gestión de Hoteles',
      cssClass: 'gestion-hoteles',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      developer: 'Leonardo Morabito',
      description: 'Una aplicación para gestionar reservas y habitaciones de un hotel.'
    },
    {
      title: 'Plataforma E-commerce',
      cssClass: 'ecommerce',
      tags: ['React', 'Express', 'PostgreSQL'],
      developer: 'Leonardo Morabito',
      description: 'Una plataforma completa para la venta de productos en línea.'
    },
  ];

  projectsStudent2: Project[] = [
    {
      title: 'Aplicación de Bienestar',
      cssClass: 'bienestar',
      tags: ['React Native', 'Firebase'],
      developer: 'Victoria Elliott',
      description: 'Una app móvil para seguimiento de hábitos saludables.'
    },
    {
      title: 'Sistema de Reservas',
      cssClass: 'reservas',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      developer: 'Victoria Elliott',
      description: 'Una aplicación web para gestionar reservas en restaurantes.'
    },
  ];
}
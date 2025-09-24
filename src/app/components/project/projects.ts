import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definición de la interfaz del proyecto para garantizar el tipado
interface Project {
  title: string;
  img: string;
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
      img: 'assets/images/project-1.jpg',
      cssClass: 'gestion-hoteles',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      developer: 'Leonardo Morabito',
    },
    {
      title: 'Plataforma E-commerce',
      img: 'assets/images/project-2.jpg',
      cssClass: 'ecommerce',
      tags: ['React', 'Express', 'PostgreSQL'],
      developer: 'Leonardo Morabito',
    },
  ];

  projectsStudent2: Project[] = [
    {
      title: 'Aplicación de Bienestar',
      img: 'assets/images/project-3.jpg',
      cssClass: 'bienestar',
      tags: ['React Native', 'Firebase'],
      developer: 'Victoria Elliott',
    },
    {
      title: 'Sistema de Reservas',
      img: 'assets/images/project-4.jpg',
      cssClass: 'reservas',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      developer: 'Victoria Elliott',
    },
  ];
}
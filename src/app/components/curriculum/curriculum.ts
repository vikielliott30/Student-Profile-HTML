import { Component } from '@angular/core';
import { ProjectsGrid } from './projects-grid';

// Actualiza el tipo Project para que coincida con la nueva estructura del HTML
type Project = {
  title: string;
  img: string;
  cssClass: string;
  tags: string[];
  developer: string;
};

@Component({
  selector: 'app-curriculum',
  standalone: true,
  //imports: [ProjectsGrid],
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.scss',
})
export class Curriculum {
  
  Student1 = {
    name: 'Leonardo Carmelo Morabito',
    avatar : 'assets/image/leo.jpg',
    role: 'Estudiante de Ingeniería en Sistemas',
    email: 'leonardomorabito02@gmail.com',
    tel: '+54 9 351 394 1076',
    github: 'leomorabito02',
  };

  Student2 = {
    name: 'Victoria Elliott',
    avatar: 'assets/images/miche.jpeg',
    role: 'Estudiante de Ingeniería en Sistemas',
    email: 'vikielliot30@gmail.com',
    tel: '+54 9 351 394 1076',
    github: 'vikielliot30',
  };

  // Se ha actualizado la estructura de los proyectos
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
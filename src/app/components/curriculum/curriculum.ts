import { Component } from '@angular/core';
import { ProjectsGrid } from './projects-grid';

type Project = { title: string; img: string; cssClass: string; };

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [ProjectsGrid],
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

  // componente padre
  projectsStudent1 = [
  
    { title: 'Gestión de Hoteles',   cssClass: 'start',       img: '/img/start.jpg' },
  ];

  Student2 = {
    name: 'Victoria Elliott',
    avatar: 'assets/images/miche.jpeg',
    role: 'Estudiante de Ingeniería en Sistemas',
    email: 'vikielliot30@gmail.com',
    tel: '+54 9 351 394 1076',
    github: 'vikielliot30',
  };

  // componente padre
  projectsStudent2 = [
    { title: 'Polko',       cssClass: 'polko',       img: '/img/polko.jpg' },
    { title: 'Tesis',       cssClass: 'tesis',       img: '/img/tesis.jpg' },
    { title: 'Computación', cssClass: 'computacion', img: '/img/computacion.jpg' },
    { title: 'Start UCC',   cssClass: 'start',       img: '/img/start.jpg' },
  ];
}

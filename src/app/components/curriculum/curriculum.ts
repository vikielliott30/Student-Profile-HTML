// curriculum.ts

import { Component } from '@angular/core';

// Asegúrate de que este tipo Project esté en el mismo archivo
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

  // Datos completos para cada proyecto, incluyendo tags y developer
  
}
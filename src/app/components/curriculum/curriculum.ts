// curriculum.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.scss',
})
export class Curriculum {
  
  Student1 = {
    name: 'Leonardo Morabito',
    // Ruta corregida: de 'image' a 'images'
    avatar : '../../assets/images/leo.jpg', 
    role: 'Estudiante de Ingeniería en Sistemas',
    email: 'leonardomorabito02@gmail.com',
    tel: '+54 9 351 394 1076',
    github: 'leomorabito02',
  };

  Student2 = {
    name: 'Victoria Elliott',
    // Esta ruta ya estaba correcta
    avatar: '../../assets/images/miche.jpeg',
    role: 'Estudiante de Ingeniería en Sistemas',
    email: 'vikielliott30@gmail.com',
    tel: '+54 9 3521 43-9947',
    github: 'vikielliott30',
  };
}
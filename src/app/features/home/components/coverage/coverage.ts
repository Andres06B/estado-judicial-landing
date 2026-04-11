import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';

type Ciudad = {
  nombre: string;
  top: string;
  left: string;
  activa: boolean;
};

@Component({
  selector: 'app-coverage',
  standalone: true,
  imports: [NgClass, NgForOf, NgIf],
  templateUrl: './coverage.html',
  styleUrl: './coverage.css',
})
export class Coverage {
  ciudadActiva = 'Bogotá';

  ciudades: Ciudad[] = [
    { nombre: 'Bogotá', top: '52%', left: '52%', activa: true },

    { nombre: 'Medellín', top: '38%', left: '46%', activa: false },

    { nombre: 'Cali', top: '60%', left: '42%', activa: false },

    { nombre: 'Barranquilla', top: '18%', left: '52%', activa: false },

    { nombre: 'Cartagena', top: '22%', left: '49%', activa: false },

    { nombre: 'Bucaramanga', top: '42%', left: '56%', activa: false },
  ];

  seleccionarCiudad(ciudad: Ciudad): void {
    this.ciudadActiva = ciudad.nombre;

    this.ciudades.forEach(c => {
      c.activa = c.nombre === ciudad.nombre;
    });
  }
}

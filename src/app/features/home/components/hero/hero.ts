import { Component } from '@angular/core';
import { NgForOf, NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgForOf, NgClass, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  stats = [
    { value: '32', label: 'Departamentos cubiertos' },
    { value: '100+', label: 'Ciudades con presencia', offset: true },
    { value: '500+', label: 'Clientes satisfechos' },
    { value: '24/7', label: 'Plataforma disponible', highlight: true, offset: true },
  ];

  trustItems = [
    '+500 clientes activos',
    'Cobertura en 32 departamentos',
    'Atención 24/7'
  ];

}

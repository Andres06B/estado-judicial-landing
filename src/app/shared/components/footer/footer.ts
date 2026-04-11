import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#cobertura', label: 'Cobertura' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#contacto', label: 'Contacto' },
  ];

  services = [
    'Instrumentos Públicos',
    'Tránsito',
    'Trámites Especiales',
    'Visitas',
    'Notarías',
  ];

  socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
  ];
}

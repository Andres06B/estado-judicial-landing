import { Component } from '@angular/core';
import { NgForOf, NgClass } from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [NgForOf,],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  currentTestimonial = 0;

  clients = [
    { name: "Banco Nacional", logo: "logo.png" },
    { name: "Constructora del Valle", logo: "logo.png" },
    { name: "Aseguradora Confianza", logo: "logo.png" },
    { name: "Grupo Empresarial Norte", logo: "logo.png" },
    { name: "Inmobiliaria Central", logo: "logo.png" },
    { name: "Firma Jurídica Asociados", logo: "logo.png" },
  ];

  testimonials = [
    {
      text: "Estado Jurídico ha transformado la manera en que gestionamos nuestros procesos legales.",
      author: "Dr. Carlos Rodríguez",
      role: "Director Jurídico",
      company: "Grupo Empresarial Norte",
      initials: "CR"
    },
    {
      text: "La eficiencia del equipo nos permitió optimizar tiempos de respuesta significativamente.",
      author: "Dra. María González",
      role: "Socia Principal",
      company: "Firma Jurídica Asociados",
      initials: "MG"
    },
    {
      text: "Más de 5 años trabajando juntos con excelente calidad y compromiso.",
      author: "Dr. Andrés Martínez",
      role: "Gerente Legal",
      company: "Banco Nacional",
      initials: "AM"
    },
  ];

  nextTestimonial() {
    this.currentTestimonial =
      (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonial =
      (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  setTestimonial(index: number) {
    this.currentTestimonial = index;
  }
}

import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

type Cliente = {
  logo: string;
  nombre: string;
};

@Component({
  selector: 'app-contact',
  imports: [NgForOf],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  clientes: Cliente[] = [
    { logo: 'logo.png', nombre: 'Empresa 1' },
    { logo: 'logo.png', nombre: 'Empresa 2' },
    { logo: 'logo.png', nombre: 'Empresa 3' },
    { logo: 'logo.png', nombre: 'Empresa 4' },
    { logo: 'logo.png', nombre: 'Empresa 5' },
  ];
}

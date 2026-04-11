import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { BtnWhatsaap } from '../../shared/components/ui/btn-whatsaap/btn-whatsaap';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Header, BtnWhatsaap ,Footer  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout { }

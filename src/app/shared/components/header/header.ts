import { Component, HostListener } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen: boolean = false;
  activeSection = 'Home';
  scrolled = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  smoothScroll(targetId: string): void {
    this.menuOpen = false;
    const target = document.getElementById(targetId);
    if (target) {
      const startPosition = window.pageYOffset;
      const targetPosition =
        target.getBoundingClientRect().top + startPosition - 80;

      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, startPosition + distance * progress);

        if (timeElapsed < duration)
          window.requestAnimationFrame(animation);
      };

      window.requestAnimationFrame(animation);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const sections = ['Home', 'Servicios', 'Nosotros', 'Cobertura', 'Clientes', 'Contacto'];
    const scrollPosition = window.pageYOffset + 150;

    // 👇 DETECTA SCROLL PARA CAMBIO DE HEADER
    this.scrolled = window.pageYOffset > 50;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  
}
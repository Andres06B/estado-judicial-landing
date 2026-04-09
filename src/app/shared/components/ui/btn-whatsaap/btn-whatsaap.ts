import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-whatsaap',
  standalone: true,
  imports: [],
  templateUrl: './btn-whatsaap.html',
  styleUrl: './btn-whatsaap.css',
})
export class BtnWhatsaap implements OnInit {
  @Input() phoneNumber: string = '573172714572';

  @Input() defaultMessage: string =
    'Buen día! Estoy requiriendo de sus servicios.';

  @Input() companyName: string = 'Estado Jurídico';

  whatsappLink: string = '';

  ngOnInit(): void {
    this.generateWhatsAppLink();
  }

  private generateWhatsAppLink(): void {
    const encodedMessage = encodeURIComponent(
      `${this.defaultMessage} (${this.companyName})`
    );

    this.whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}

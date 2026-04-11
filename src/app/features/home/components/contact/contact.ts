import { Component, NgModule } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';
  isLoading = false;


  async sendEmail() {
    this.successMessage = '';
    this.errorMessage = '';
    this.isLoading = true;

    console.log('Enviando email con los siguientes datos:', this.formData);
    try {

      const response = await emailjs.send(
        'service_estadojuridico',     // ✅ SERVICE ID
        'template_xfovgr5',           // ✅ TEMPLATE ID
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          phone: this.formData.phone,
          company: this.formData.company,
          message: this.formData.message
        },
        'VgMRXaM40G0zFeHtA'           // ✅ PUBLIC KEY
      );

      console.log('SUCCESS', response);

      this.successMessage = 'Mensaje enviado correctamente';

      // reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      };

    } catch (error) {
      console.error('ERROR', error);
      this.errorMessage = 'Error al enviar el mensaje';
    }

    this.isLoading = false;
  }
}

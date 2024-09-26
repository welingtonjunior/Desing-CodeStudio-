import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  public infoContact = [
    {
      icon: faPhone,
      text: '+55 32 99138-6687'
    },
    {
      icon: faEnvelope,
      text: 'welingtonfagundesch@gmail.com'
    },
    {
      icon: faMapMarkerAlt,
      text: 'São Bernardo do Campo, SP, Brazil'
    }
  ];

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Adicione a lógica de envio aqui
    } else {
      console.log('Form is invalid');
    }
  }
  
}

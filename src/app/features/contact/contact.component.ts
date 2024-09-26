import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, NgForm } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule, ModalComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  
  public visibleModal: boolean = false;
  public titleModal: string = '';
  public bodyModal: string = '';
  
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

  protected onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.showSuccessModal()
      this.visibleModal = true
    } else {
      console.log('Form is invalid');
    }
  }

  private showSuccessModal() {
    this.titleModal = 'Mensagem Enviada com Sucesso!';
    this.bodyModal = 'Agradecemos pelo seu contato! Sua mensagem foi enviada com sucesso e nossa equipe responderá em breve.';
  }
  
}

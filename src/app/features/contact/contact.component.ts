import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild, Directive } from '@angular/core';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, NgForm } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { EmailValidatorDirective } from '../../directives/email-validator.directive.ts.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule, ModalComponent, EmailValidatorDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  
  public visibleModal: boolean = false;
  public titleModal: string = '';
  public bodyModal: string = '';
  public emailError = false;
  
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
      this.showSuccessModal()
      this.visibleModal = true
    } 
    this.contactForm.reset()
  }
  protected onFocusOut(control: any) {
    this.emailError = control?.email?.errors !== null
    console.log(control)
  }

  private showSuccessModal() {
    this.titleModal = 'Mensagem Enviada com Sucesso!';
    this.bodyModal = 'Agradecemos pelo seu contato! Sua mensagem foi enviada com sucesso e nossa equipe responderá em breve.';
  }
  
}

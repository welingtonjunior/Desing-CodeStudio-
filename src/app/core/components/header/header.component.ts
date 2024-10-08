import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  public header = [
  {
    name: `Home`,
    router: `/`,
    atived: true 
  },
  {
    name: `About`,
    router: `/about`,
    atived: false 
  },
  {
    name: `Portfolio`,
    router:`/portfolio`,
    atived: false 
  },
  {
    name: `Contact`,
    router: `/contact`,
    atived: false 
  },
  ]
  
}

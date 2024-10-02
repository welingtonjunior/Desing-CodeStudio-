import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {


  projects = [
    { title: 'Alessa Hair', image: 'assets/alessa-hair.png', link: 'https://alessahair.vercel.app/' },
    { title: 'Findor AI', image: 'assets/findor.png', link: 'https://workspace.findor.ai/auth/sign-in' },
    { title: 'Internet Banking', image: 'assets/internet-banking.jpg', link: 'https://github.com/welingtonjunior/Internet-Banking' },
   
  ];
}

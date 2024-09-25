import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  public services = [
    {
      title: "UI/UX Design",
      text: "Crafting visually appealing and user-friendly interfaces that prioritize seamless user experiences across both web and mobile platforms."
    },
    {
      title: "Website Redesign",
      text: "Enhancing the look, feel, and functionality of existing websites to improve user engagement, optimize performance, and align with modern design trends."
    },
    {
      title: "Front-end Development",
      text: "Developing responsive, interactive, and high-performance front-end solutions using the latest technologies like Angular, React, or Vue.js, tailored to client needs."
    },
    {
      title: "Mobile App Design",
      text: "Designing custom mobile applications that offer intuitive navigation and engaging user interfaces for both Android and iOS platforms."
    },
    {
      title: "E-commerce Solutions",
      text: "Creating tailored online stores with a focus on user experience, mobile responsiveness, and conversion optimization, ensuring smooth transactions and customer satisfaction."
    },
    {
      title: "Branding and Visual Identity",
      text: "Developing cohesive branding materials such as logos, color schemes, typography, and other visual assets that reflect a strong and memorable brand identity."
    }
  ];
  
}

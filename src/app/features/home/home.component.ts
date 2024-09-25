import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit { 
  public title = {
    titleFrst: 'Design',
    titleSnd: '{Code} Studio'
  };

  ngAfterViewInit(): void {
      this.typeText(this.title.titleFrst + ' +', 'titleFrst', () => {
        this.typeText(this.title.titleSnd, 'titleSnd', () => {
          this.typeEqual(() => {
            this.typeText('digital innovation', 'result'); 
          });
        });
      });
      
    
  }

  typeText(text: string, elementId: string, callback?: () => void) {
    const options = {
      strings: [text],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: false,
      showCursor: false,
      onComplete: () => {
        if (callback) callback(); 
      }
    };

    new Typed(`#${elementId}`, options);
  }

  typeEqual(callback: () => void) {
    this.typeText('=', 'equal', callback); 
  }
}
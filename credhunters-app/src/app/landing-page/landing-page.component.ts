import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('buttonAnimation', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('pressed', style({
        transform: 'scale(1.2)'
      })),
      transition('normal => pressed', animate('100ms ease-in')),
      transition('pressed => normal', animate('100ms ease-out'))
    ])
  ]
})
export class LandingPageComponent {
  buttonState = 'normal';

  constructor(private router: Router) {}

  enterApp() {
    // Trigger the animation
    this.buttonState = 'pressed';

    // Navigate to the desired route (e.g., the coaster list page) after a delay
    setTimeout(() => {
      this.router.navigate(['/coaster-list']);
    }, 200); // Adjust the delay duration as needed
  }
}

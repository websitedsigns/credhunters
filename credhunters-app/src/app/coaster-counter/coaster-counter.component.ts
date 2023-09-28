import { Component } from '@angular/core';

@Component({
  selector: 'app-coaster-counter',
  templateUrl: './coaster-counter.component.html',
})
export class CoasterCounterComponent {
  coasterCount = 0; // Initialize the coaster count

  incrementCount() {
    this.coasterCount++;
  }

  decrementCount() {
    if (this.coasterCount > 0) {
      this.coasterCount--;
    }
  }
}

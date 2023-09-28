import { Component } from '@angular/core';

@Component({
  selector: 'app-add-coaster',
  templateUrl: './add-coaster.component.html',
})
export class AddCoasterComponent {
  coasterName: string = '';
  park: string = '';
  manufacturer: string = '';

  // Implement a method to add a new coaster
  addCoaster() {
    // Here, you can add the coaster details to your data store or perform any necessary actions
    // You can also consider using a service to handle data operations
    console.log('Added coaster:', this.coasterName);
    console.log('Park:', this.park);
    console.log('Manufacturer:', this.manufacturer);

    // Optionally, you can reset the form fields after adding the coaster
    this.coasterName = '';
    this.park = '';
    this.manufacturer = '';
  }
}

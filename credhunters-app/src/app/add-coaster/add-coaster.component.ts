import { Component } from '@angular/core';

@Component({
  selector: 'app-add-coaster',
  templateUrl: './add-coaster.component.html',
})
export class AddCoasterComponent {
  newCoaster: any = {}; // Define newCoaster as an empty object

  // Implement your logic to add a new coaster here
  addNewCoaster() {
    // Check if the required data for a new coaster is present
    if (!this.newCoaster.name || !this.newCoaster.park || !this.newCoaster.manufacturer) {
      alert('Please fill in all required fields.');
      return;
    }

    // You can perform additional logic like sending the data to a server here
    // For now, let's just log the new coaster data
    console.log('Adding new coaster:', this.newCoaster);

    // Optionally, you can reset the form fields after adding the coaster
    this.newCoaster = {};
  }
}

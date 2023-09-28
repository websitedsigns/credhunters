import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-coaster',
  templateUrl: './edit-coaster.component.html',
})
export class EditCoasterComponent {
  editedCoaster: any = {}; // Define editedCoaster as an empty object

  // Implement your logic to update the coaster here
  updateCoaster() {
    // Check if the required data for updating the coaster is present
    if (!this.editedCoaster.id || !this.editedCoaster.name || !this.editedCoaster.park || !this.editedCoaster.manufacturer) {
      alert('Please fill in all required fields.');
      return;
    }

    // You can perform additional logic like sending the updated data to a server here
    // For now, let's just log the updated coaster data
    console.log('Updating coaster:', this.editedCoaster);

    // Optionally, you can reset the form fields after updating the coaster
    this.editedCoaster = {};
  }
}

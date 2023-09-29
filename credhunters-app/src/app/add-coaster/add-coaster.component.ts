import { Component, OnInit } from '@angular/core';
import { CoasterDataService } from '../coaster-data.service'; // Adjust the import path as needed
import { CoasterCountService } from '../shared/coaster-count.service'; // Adjust the import path as needed

@Component({
  selector: 'app-add-coaster',
  templateUrl: './add-coaster.component.html',
  styleUrls: ['./add-coaster.component.css'], // You can add a CSS file if needed
})
export class AddCoasterComponent implements OnInit {
  coasterName: string = '';
  park: string = '';
  manufacturer: string = '';
  coasterCount: number = 0; // Make sure this property is declared
  coasters: any[] = []; // This array should hold your coaster data
  
  constructor(
    private coasterDataService: CoasterDataService,
    private coasterCountService: CoasterCountService
  ) {}

  ngOnInit() {
    // Initialize the 'coasters' array when the component is loaded
    this.coasters = this.coasterDataService.getCoasters();
  }

  addCoaster() {
    // Check if the form fields are filled and not duplicate
    if (this.coasterName && this.park && this.manufacturer) {
      const newCoaster = {
        name: this.coasterName,
        park: this.park,
        manufacturer: this.manufacturer,
      };
  
      // Check if the coaster is a duplicate
      if (!this.coasterDataService.isDuplicateCoaster(newCoaster)) {
        // Add the coaster to the data service
        this.coasterDataService.addCoaster(newCoaster);
  
       
  
        // Increment the coasterCount
        this.coasterCount++;
  
        // Reset form fields
        this.coasterName = '';
        this.park = '';
        this.manufacturer = '';
      } else {
        // Handle the case where the coaster is a duplicate
        console.error('Duplicate coaster detected.');
      }
    } else {
      // Handle the case where the form fields are not filled out
      console.error('Please fill out all form fields.');
    }
  }
}

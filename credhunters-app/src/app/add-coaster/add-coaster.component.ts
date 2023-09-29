import { Component, OnInit } from '@angular/core';
import { CoasterDataService } from '../coaster-data.service';
import { CoasterCountService } from '../shared/coaster-count.service';

@Component({
  selector: 'app-add-coaster',
  templateUrl: './add-coaster.component.html',
})
export class AddCoasterComponent implements OnInit {
  coasterName: string = '';
  park: string = '';
  manufacturer: string = '';
  buttonState: string = 'normal';
  coasterCount: number = 0; // Declare the coasterCount property

  
  constructor(
    private coasterDataService: CoasterDataService,
    private coasterCountService: CoasterCountService
  ) {}

  ngOnInit() {
    // Initialize the coaster count when the component is loaded
    this.coasterCountService.coasterCount$.subscribe((count) => {
      this.coasterCount = count;
    });
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

        // Increment the coaster count
        this.coasterCountService.incrementCoasterCount();

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

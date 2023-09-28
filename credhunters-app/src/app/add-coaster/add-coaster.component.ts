import { Component, OnInit } from '@angular/core';
import { CoasterDataService } from '../coaster-data.service';

@Component({
  selector: 'app-add-coaster',
  templateUrl: './add-coaster.component.html',
})
export class AddCoasterComponent implements OnInit {
  coasterName: string = '';
  park: string = '';
  manufacturer: string = '';
  buttonState: string = 'normal';
  coasterCount: number = 0;

  constructor(private coasterDataService: CoasterDataService) {}

  ngOnInit() {
    // Initialize the coaster count when the component is loaded
    this.coasterCount = this.coasterDataService.getCoasterCount();
  }

  addCoaster() {
    // Check if the form fields are filled and not duplicate
    if (this.coasterName && this.park && this.manufacturer) {
      const newCoaster = {
        name: this.coasterName,
        park: this.park,
        manufacturer: this.manufacturer,
      };

      // Add the coaster to the data service
      this.coasterDataService.addCoaster(newCoaster);

      // Reset form fields
      this.coasterName = '';
      this.park = '';
      this.manufacturer = '';

      // Update the coaster count
      this.coasterCount++;
    }
  }
}

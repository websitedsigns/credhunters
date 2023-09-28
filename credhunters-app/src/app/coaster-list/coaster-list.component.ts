// coaster-list.component.ts
import { Component } from '@angular/core';
import { CoasterDataService } from '../coaster-data.service'; // Import the service

@Component({
  selector: 'app-coaster-list',
  templateUrl: './coaster-list.component.html',
})
export class CoasterListComponent {
  coasters: any[] = []; // Initialize the property as an empty array

  constructor(private coasterDataService: CoasterDataService) {
    // Fetch coaster data from the service
    this.coasters = this.coasterDataService.getCoasters();
  }
}

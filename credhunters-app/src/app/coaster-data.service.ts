import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoasterDataService {
  private coasters: any[] = []; // Initialize the property as an empty array

  constructor() {}

  getCoasters() {
    return this.coasters;
  }

  addCoaster(coaster: any) {
    this.coasters.push(coaster);
  }
  
  // Add a method to get the coaster count
  getCoasterCount() {
    return this.coasters.length;
  }
}

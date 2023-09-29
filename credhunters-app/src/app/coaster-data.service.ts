import { Injectable } from '@angular/core';
import { Coaster } from './models/coaster.model';
@Injectable({
  providedIn: 'root',
})
export class CoasterDataService {
  private coasters: Coaster[] = [];

  constructor() {}

  // Add a new coaster to the list
  addCoaster(newCoaster: Coaster): void {
    this.coasters.push(newCoaster);
  }

  // Get the list of all coasters
  getCoasters(): Coaster[] {
    return this.coasters;
  }

    // Get the total count of coasters
  getCoasterCount(): number {
    return this.coasters.length;
  }
  
  // Check if a coaster with the same name already exists
  isDuplicateCoaster(newCoaster: Coaster): boolean {
    return this.coasters.some((coaster) => coaster.name === newCoaster.name);
  }
}

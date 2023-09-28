import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoasterService {
  private coasters: Coaster[] = [
    { id: 1, name: 'Coaster 1', park: 'Park A', manufacturer: 'Manufacturer X' },
    { id: 2, name: 'Coaster 2', park: 'Park B', manufacturer: 'Manufacturer Y' },
    { id: 3, name: 'Coaster 3', park: 'Park C', manufacturer: 'Manufacturer Z' },
  ];

  // Get all coasters
  getAllCoasters(): Coaster[] {
    return this.coasters;
  }

  // Get a single coaster by ID
  getCoasterById(id: number): Coaster | undefined {
    return this.coasters.find((coaster) => coaster.id === id);
  }

  // Add a new coaster
  addCoaster(coaster: Coaster): void {
    // Assign a unique ID (You might use a more robust method for generating IDs)
    coaster.id = this.generateUniqueId();
    this.coasters.push(coaster);
  }

  // Update an existing coaster
  updateCoaster(coaster: Coaster): void {
    const index = this.coasters.findIndex((c) => c.id === coaster.id);
    if (index !== -1) {
      this.coasters[index] = coaster;
    }
  }

  // Remove a coaster by ID
  removeCoaster(id: number): void {
    const index = this.coasters.findIndex((coaster) => coaster.id === id);
    if (index !== -1) {
      this.coasters.splice(index, 1);
    }
  }

  // Generate a unique ID (Replace with a more robust method)
  private generateUniqueId(): number {
    return this.coasters.length + 1;
  }
}

export interface Coaster {
  id: number;
  name: string;
  park: string;
  manufacturer: string;
}

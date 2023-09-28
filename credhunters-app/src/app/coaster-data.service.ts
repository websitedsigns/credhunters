// coaster-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoasterDataService {
  private coasters: any[] = []; // Store coaster data here

  addCoaster(coaster: any) {
    this.coasters.push(coaster);
  }

  getCoasters() {
    return this.coasters;
  }
}

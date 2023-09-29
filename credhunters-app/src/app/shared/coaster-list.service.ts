// shared/coaster-list.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coaster } from '../models/coaster.model'; // Import the Coaster interface

@Injectable({
  providedIn: 'root',
})
export class CoasterListService {
  private coasterListSubject = new BehaviorSubject<Coaster[]>([]);
  coasterList$ = this.coasterListSubject.asObservable();

  constructor() {}

  getCoasterList(): Coaster[] {
    return this.coasterListSubject.value;
  }

  addCoaster(newCoaster: Coaster) {
    const currentList = this.coasterListSubject.value;
    currentList.push(newCoaster);
    this.coasterListSubject.next(currentList);
    console.log('Coaster added to list:', newCoaster); // Add this line for debugging
  }
}
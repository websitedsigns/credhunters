import { Component } from '@angular/core';

@Component({
  selector: 'app-coaster-list',
  templateUrl: './coaster-list.component.html',
})
export class CoasterListComponent {
  coasters: any[] = [];

  constructor() {
    // For testing purposes, populate the 'coasters' array with some dummy data
    this.coasters = [
      { id: 1, name: 'Coaster 1', park: 'Park A' },
      { id: 2, name: 'Coaster 2', park: 'Park B' },
      { id: 3, name: 'Coaster 3', park: 'Park C' },
      // Add more coaster objects as needed
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CoasterDataService } from '../coaster-data.service';

@Component({
  selector: 'app-add-coaster',
  templateUrl: './add-coaster.component.html',
  animations: [
    trigger('buttonAnimation', [
      state('normal', style({
        transform: 'scale(1)',
      })),
      state('clicked', style({
        transform: 'scale(1.1)',
      })),
      transition('normal => clicked', [
        animate('200ms ease-out')
      ]),
      transition('clicked => normal', [
        animate('200ms ease-in')
      ]),
    ]),
  ],
})
export class AddCoasterComponent implements OnInit {
  coasterName: string = '';
  park: string = '';
  manufacturer: string = '';
  buttonState: string = 'normal';
  coasterCount: number = 0; // Initialize the coaster count

  constructor(private coasterDataService: CoasterDataService) {}

  ngOnInit() {
    // Get the initial coaster count from the data service
    this.coasterCount = this.coasterDataService.getCoasterCount();
  }

  addCoaster() {
    const newCoaster = {
      name: this.coasterName,
      park: this.park,
      manufacturer: this.manufacturer,
    };

    // Add the coaster to the data service
    this.coasterDataService.addCoaster(newCoaster);

    // Update the coaster count
    this.coasterCount++;

    // Set button animation state
    this.buttonState = 'clicked';

    // Reset form fields
    this.coasterName = '';
    this.park = '';
    this.manufacturer = '';
  }
}

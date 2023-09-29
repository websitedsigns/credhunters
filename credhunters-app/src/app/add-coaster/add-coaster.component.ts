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

  constructor(
    private coasterDataService: CoasterDataService,
    private coasterCountService: CoasterCountService
  ) {}

  ngOnInit() {}

  addCoaster() {
    if (this.coasterName && this.park && this.manufacturer) {
      const newCoaster = {
        name: this.coasterName,
        park: this.park,
        manufacturer: this.manufacturer,
      };

      if (!this.coasterDataService.isDuplicateCoaster(newCoaster)) {
        this.coasterDataService.addCoaster(newCoaster);
        this.coasterCountService.incrementCoasterCount();

        this.coasterName = '';
        this.park = '';
        this.manufacturer = '';
      } else {
        console.error('Duplicate coaster detected.');
      }
    } else {
      console.error('Please fill out all form fields.');
    }
  }
}

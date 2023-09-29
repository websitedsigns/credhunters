import { Component, OnInit } from '@angular/core';
import { CoasterDataService } from '../coaster-data.service';
import { Coaster } from '../models/coaster.model'; // Import the Coaster interface

@Component({
  selector: 'app-coaster-list',
  templateUrl: './coaster-list.component.html',
})
export class CoasterListComponent implements OnInit {
  coasters: Coaster[] = [];
  coasterCount: number = 0;

  constructor(
    private coasterDataService: CoasterDataService
  ) {}

  ngOnInit(): void {
    this.coasters = this.coasterDataService.getCoasters();
    this.coasterCount = this.coasters.length;
  }
}

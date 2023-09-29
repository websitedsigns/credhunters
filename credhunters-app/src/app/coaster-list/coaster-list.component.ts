import { Component, OnInit } from '@angular/core';
import { CoasterDataService } from '../coaster-data.service';
import { CoasterCountService } from '../shared/coaster-count.service';
import { Coaster }  from '../models/coaster.model'
@Component({
  selector: 'app-coaster-list',
  templateUrl: './coaster-list.component.html',
})
export class CoasterListComponent implements OnInit {
  coasters: Coaster[] = [];
  coasterCount: number = 0;

  constructor(
    private coasterDataService: CoasterDataService,
    private coasterCountService: CoasterCountService
  ) {}

  ngOnInit() {
    this.coasters = this.coasterDataService.getCoasters();
    this.coasterCountService.coasterCount$.subscribe((count) => {
      this.coasterCount = count;
    });
  }
}

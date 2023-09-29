import { Component, OnInit } from '@angular/core';
import { CoasterCountService } from '../shared/coaster-count.service';

@Component({
  selector: 'app-coaster-list',
  templateUrl: './coaster-list.component.html',
})
export class CoasterListComponent implements OnInit {
  coasterCount: number = 0;

  constructor(private coasterCountService: CoasterCountService) {}

  ngOnInit() {
    this.coasterCountService.coasterCount$.subscribe((count) => {
      this.coasterCount = count;
    });
  }
}

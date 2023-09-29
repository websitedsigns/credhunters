import { Component, OnInit } from '@angular/core';
import { CoasterCountService } from '../shared/coaster-count.service';

@Component({
  selector: 'app-coaster-counter',
  templateUrl: './coaster-counter.component.html',
})
export class CoasterCounterComponent implements OnInit {
  coasterCount: number = 0;

  constructor(private coasterCountService: CoasterCountService) {}

  ngOnInit() {
    this.coasterCountService.coasterCount$.subscribe((count) => {
      this.coasterCount = count;
    });
  }
}

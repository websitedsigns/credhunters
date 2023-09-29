import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoasterCountService {
  private coasterCountSubject = new BehaviorSubject<number>(0);
  coasterCount$ = this.coasterCountSubject.asObservable();

  constructor() {}

  getCoasterCount(): number {
    return this.coasterCountSubject.value;
  }

  incrementCoasterCount() {
    const currentCount = this.coasterCountSubject.value;
    this.coasterCountSubject.next(currentCount + 1);
  }
}

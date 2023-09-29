import { TestBed } from '@angular/core/testing';

import { CoasterCountService } from './coaster-count.service';

describe('CoasterCountService', () => {
  let service: CoasterCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoasterCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

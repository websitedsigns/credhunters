import { TestBed } from '@angular/core/testing';

import { CoasterService } from './coaster.service';

describe('CoasterService', () => {
  let service: CoasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

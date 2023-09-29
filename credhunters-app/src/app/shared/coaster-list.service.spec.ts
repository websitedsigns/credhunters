import { TestBed } from '@angular/core/testing';

import { CoasterListService } from './coaster-list.service';

describe('CoasterListService', () => {
  let service: CoasterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoasterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

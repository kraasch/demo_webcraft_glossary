import { TestBed } from '@angular/core/testing';

import { MycounterService } from './mycounter.service';

describe('MycounterService', () => {
  let service: MycounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

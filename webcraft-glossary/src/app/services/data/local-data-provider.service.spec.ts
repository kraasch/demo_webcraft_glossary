import { TestBed } from '@angular/core/testing';

import { LocalDataProviderService } from './local-data-provider.service';

describe('LocalDataProviderService', () => {
  let service: LocalDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CorporateApiService } from './corporate-api.service';

describe('CorporateApiService', () => {
  let service: CorporateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

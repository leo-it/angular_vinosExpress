import { TestBed } from '@angular/core/testing';

import { ApiVinosService } from './api-vinos.service';

describe('ApiVinosService', () => {
  let service: ApiVinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

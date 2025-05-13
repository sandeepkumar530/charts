import { TestBed } from '@angular/core/testing';

import { LineserviceService } from './lineservice.service';

describe('LineserviceService', () => {
  let service: LineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

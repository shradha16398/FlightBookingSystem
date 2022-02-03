import { TestBed } from '@angular/core/testing';

import { CancleBookingService } from './cancle-booking.service';

describe('CancleBookingService', () => {
  let service: CancleBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancleBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

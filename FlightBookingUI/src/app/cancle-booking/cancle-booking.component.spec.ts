import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancleBookingComponent } from './cancle-booking.component';

describe('CancleBookingComponent', () => {
  let component: CancleBookingComponent;
  let fixture: ComponentFixture<CancleBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancleBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancleBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

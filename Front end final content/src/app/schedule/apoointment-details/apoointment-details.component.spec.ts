import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoointmentDetailsComponent } from './apoointment-details.component';

describe('ApoointmentDetailsComponent', () => {
  let component: ApoointmentDetailsComponent;
  let fixture: ComponentFixture<ApoointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoointmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalUserEditProfileComponent } from './hospital-user-edit-profile.component';

describe('HospitalUserEditProfileComponent', () => {
  let component: HospitalUserEditProfileComponent;
  let fixture: ComponentFixture<HospitalUserEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalUserEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalUserEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

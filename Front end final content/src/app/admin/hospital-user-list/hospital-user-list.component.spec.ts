import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalUserListComponent } from './hospital-user-list.component';

describe('HospitalUserListComponent', () => {
  let component: HospitalUserListComponent;
  let fixture: ComponentFixture<HospitalUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

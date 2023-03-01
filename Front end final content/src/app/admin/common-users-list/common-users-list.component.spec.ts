import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUsersListComponent } from './common-users-list.component';

describe('CommonUsersListComponent', () => {
  let component: CommonUsersListComponent;
  let fixture: ComponentFixture<CommonUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

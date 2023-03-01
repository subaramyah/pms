import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedInboxComponent } from './shared-inbox.component';

describe('SharedInboxComponent', () => {
  let component: SharedInboxComponent;
  let fixture: ComponentFixture<SharedInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedInboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

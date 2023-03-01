import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavItemListComponent } from './side-nav-item-list.component';

describe('SideNavListComponent', () => {
  let component: SideNavItemListComponent;
  let fixture: ComponentFixture<SideNavItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

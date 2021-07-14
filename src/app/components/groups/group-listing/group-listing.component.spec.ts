import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListingComponent } from './group-listing.component';

describe('GroupListingComponent', () => {
  let component: GroupListingComponent;
  let fixture: ComponentFixture<GroupListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

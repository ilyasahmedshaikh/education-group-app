import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDecsriptionComponent } from './group-decsription.component';

describe('GroupDecsriptionComponent', () => {
  let component: GroupDecsriptionComponent;
  let fixture: ComponentFixture<GroupDecsriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDecsriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDecsriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

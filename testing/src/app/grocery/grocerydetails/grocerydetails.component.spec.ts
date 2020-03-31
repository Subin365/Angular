import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerydetailsComponent } from './grocerydetails.component';

describe('GrocerydetailsComponent', () => {
  let component: GrocerydetailsComponent;
  let fixture: ComponentFixture<GrocerydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

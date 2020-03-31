import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryitemComponent } from './groceryitem.component';

describe('GroceryitemComponent', () => {
  let component: GroceryitemComponent;
  let fixture: ComponentFixture<GroceryitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

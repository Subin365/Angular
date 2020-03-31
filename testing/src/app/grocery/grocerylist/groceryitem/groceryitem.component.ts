import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grocery } from '../../grocery.model';


@Component({
  selector: 'app-groceryitem',
  templateUrl: './groceryitem.component.html',
  styleUrls: ['./groceryitem.component.css']
})
export class GroceryitemComponent implements OnInit {
  @Input() item:Grocery;
  @Output() groceryClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  grocerySelected(){
    this.groceryClicked.emit();
  }

}

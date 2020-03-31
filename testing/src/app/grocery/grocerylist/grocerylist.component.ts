import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grocery } from '../grocery.model';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {
  grocerylist: Grocery[] = [
    new Grocery("test name 1", "Test description 1", "https://storage.needpix.com/rsynced_images/grocery-2932906_1280.jpg",
    ),
    new Grocery("test name 2", "Test description 2", "https://storage.needpix.com/rsynced_images/grocery-2932906_1280.jpg",
    )
  ];
  @Output() grocerySelectedList = new EventEmitter<Grocery>();

  constructor() { }

  ngOnInit(): void {
  }
  groceryClicked(index:Grocery){
    this.grocerySelectedList.emit(index);
    console.log(index);
  }

}

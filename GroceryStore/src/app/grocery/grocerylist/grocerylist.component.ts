import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery.model';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {
  grocerylist: Grocery[] = [
    new Grocery("test name", "Test description", "https://storage.needpix.com/rsynced_images/grocery-2932906_1280.jpg"),
    new Grocery("test name", "Test description", "https://storage.needpix.com/rsynced_images/grocery-2932906_1280.jpg")

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

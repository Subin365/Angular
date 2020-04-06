import { Component, OnInit } from '@angular/core';
import { Grocery } from './grocery.model';
import { GroceryService } from './grocey.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
  providers: [GroceryService]
})
export class GroceryComponent implements OnInit {
  selected: Grocery;

  constructor(private groceryService: GroceryService) { }

  ngOnInit() {
    this.groceryService.groceryClicked
      .subscribe(
        (grocery: Grocery) => {
          this.selected = grocery;
        })
  }

}


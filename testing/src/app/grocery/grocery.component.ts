import { Component, OnInit } from '@angular/core';
import { Grocery } from './grocery.model';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  selected:Grocery;
  constructor() { }

  ngOnInit(): void {
  }

}
 

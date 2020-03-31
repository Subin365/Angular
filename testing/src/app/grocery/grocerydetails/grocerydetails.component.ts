import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../grocery.model';

@Component({
  selector: 'app-grocerydetails',
  templateUrl: './grocerydetails.component.html',
  styleUrls: ['./grocerydetails.component.css']
})
export class GrocerydetailsComponent implements OnInit {
  @Input() groceryItem:Grocery;
  constructor() { }

  ngOnInit(): void {
  }

}

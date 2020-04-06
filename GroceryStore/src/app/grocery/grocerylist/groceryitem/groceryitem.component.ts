import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../../grocery.model';


@Component({
  selector: 'app-groceryitem',
  templateUrl: './groceryitem.component.html',
  styleUrls: ['./groceryitem.component.css']
})
export class GroceryitemComponent implements OnInit {
  @Input() item: Grocery;
  @Input() index:number;
  constructor() { }

  ngOnInit(): void {
  }

}

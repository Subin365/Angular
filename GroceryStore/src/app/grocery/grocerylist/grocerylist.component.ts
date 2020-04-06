import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery.model';
import { GroceryService } from '../grocey.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit {
  grocerylist: Grocery[];
  constructor(private groceryService: GroceryService, 
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.grocerylist = this.groceryService.getGroceryList();
  }
  onNewGrocery(){
    this.router.navigate(['new'], {relativeTo:this.route})
  }
}

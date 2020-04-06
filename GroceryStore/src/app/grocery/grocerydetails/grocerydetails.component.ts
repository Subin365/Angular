import { Component, OnInit } from '@angular/core';

import { Grocery } from '../grocery.model';
import { GroceryService } from '../grocey.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-grocerydetails',
  templateUrl: './grocerydetails.component.html',
  styleUrls: ['./grocerydetails.component.css']
})
export class GrocerydetailsComponent implements OnInit {
  groceryItem: Grocery;
  id: number;
  constructor(private groceryService: GroceryService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.groceryItem = this.groceryService.getGroceryById(this.id);
      }
    )
  }
  onShoppingAdd() {
    this.groceryService.addToShoppinglist(this.groceryItem.listItem);
  }
  onEditGrocery() {
    this.router.navigate(['edit'],{relativeTo:this.route})
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }
}

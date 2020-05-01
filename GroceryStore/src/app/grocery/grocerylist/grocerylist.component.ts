import { Component, OnInit, OnDestroy } from '@angular/core';
import { Grocery } from '../grocery.model';
import { GroceryService } from '../grocey.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent implements OnInit, OnDestroy {
  grocerylist: Grocery[];
  subscription: Subscription;
  constructor(private groceryService: GroceryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.groceryService.groceryUpdated.subscribe((grocery: Grocery[]) => {
      this.grocerylist = grocery;
    })
    this.grocerylist = this.groceryService.getGroceryList();
  }
  onNewGrocery() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

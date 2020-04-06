import { EventEmitter, Injectable } from '@angular/core';

import { Grocery } from './grocery.model';
import { Listitem } from '../shared/content.model';
import { ShoppingService } from '../shoppinglist/shopping.service';

@Injectable()
export class GroceryService {
    constructor(private shoppinglistService:ShoppingService){};
    groceryClicked = new EventEmitter<Grocery>();
    private grocerylist: Grocery[] = [
        new Grocery(
            "test name 1",
            "Test description 1",
            "https://storage.needpix.com/rsynced_images/grocery-2932906_1280.jpg",
            [new Listitem('wheat', 200),
            new Listitem('flour', 350)]
        ),
        new Grocery(
            "test name 2",
            "Test description 2",
            "https://storage.needpix.com/rsynced_images/grocery-2932906_1280.jpg",
            [new Listitem('sugar', 200),
            new Listitem('flour', 350)]
        )
    ]
    getGroceryList() {
        return this.grocerylist.slice();
    }
    getGroceryById(index:number){
        return this.grocerylist[index];
    }
    addToShoppinglist(listItem:Listitem[]){
        this.shoppinglistService.addListItem(listItem);
    }
}
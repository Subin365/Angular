import { Injectable } from '@angular/core';

import { Grocery } from './grocery.model';
import { Listitem } from '../shared/content.model';
import { ShoppingService } from '../shoppinglist/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class GroceryService {

    groceryUpdated = new Subject<Grocery[]>();

    constructor(private shoppinglistService:ShoppingService){};
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
    addGroceryList(grocery:Grocery){
        this.grocerylist.push(grocery);
        this.groceryUpdated.next(this.grocerylist.slice());
    }
    updateGrocery(index:number, grocery:Grocery){
        this.grocerylist[index] = grocery;
        this.groceryUpdated.next(this.grocerylist.slice())
    }
    deleteGrocery(index:number){
        this.grocerylist.splice(index,1);
        this.groceryUpdated.next(this.grocerylist.slice());
    }
}
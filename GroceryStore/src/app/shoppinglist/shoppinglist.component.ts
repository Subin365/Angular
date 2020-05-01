import { Component, OnInit, OnDestroy } from '@angular/core';

import {Listitem } from '../shared/content.model'
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  listitem: Listitem[] = [];
  private subs:Subscription;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.listitem = this.shoppingService.getList();
    this.subs = this.shoppingService.listChanged.subscribe(
      (listitem:Listitem[])=>{
        this.listitem = listitem;
      }
    )
  }
  onEditItem(index:number){
    this.shoppingService.startedEditing.next(index);
  }
  ngOnDestroy() :void{
    this.subs.unsubscribe();
  }
}

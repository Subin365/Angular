import { Component, OnInit } from '@angular/core';

import {Listitem } from '../shared/content.model'
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  listitem: Listitem[] = [];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.listitem = this.shoppingService.getList();
    this.shoppingService.listChanged.subscribe(
      (listitem:Listitem[])=>{
        this.listitem = listitem;
      }
    )
  }
}

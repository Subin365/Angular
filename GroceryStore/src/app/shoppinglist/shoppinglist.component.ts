import { Component, OnInit } from '@angular/core';

import {Listitem } from '../listitem/content.model'

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  listitem: Listitem[] = [
    new Listitem("Rice",1000),
    new Listitem("Dal",500)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

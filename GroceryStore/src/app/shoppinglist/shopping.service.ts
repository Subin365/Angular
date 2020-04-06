import { Listitem } from '../shared/content.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService{
    listChanged = new EventEmitter<Listitem[]>();
    private listitem: Listitem[] = [
        new Listitem("Rice",1000),
        new Listitem("Dal",500)
      ];
      getList(){
          return this.listitem.slice();
      }

      listAdd(listitem:Listitem){
          this.listitem.push(listitem);
          this.listChanged.emit(this.listitem.slice());

      }
      addListItem(listItem:Listitem[]){
        this.listitem.push(...listItem);
        this.listChanged.emit(this.listitem.slice());
      }
}
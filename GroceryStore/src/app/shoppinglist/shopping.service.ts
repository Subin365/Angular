import { Listitem } from '../shared/content.model';
import { Subject } from 'rxjs';

export class ShoppingService {
    listChanged = new Subject<Listitem[]>();
    startedEditing = new Subject<number>();
    private listitem: Listitem[] = [
        new Listitem("Rice",1000),
        new Listitem("Dal",500)
      ];
      getList(){
          return this.listitem.slice();
      }

      listAdd(listitem:Listitem){
          this.listitem.push(listitem);
          this.listChanged.next(this.listitem.slice());
      }

      getListItem(index:number){
        return this.listitem[index];
      }
      addListItem(listItem:Listitem[]){
        this.listitem.push(...listItem);
        this.listChanged.next(this.listitem.slice());
      }
      updateListItem(index:number, newListItem:Listitem){
        this.listitem[index]=newListItem;
        this.listChanged.next(this.listitem.slice());
      }
      deleteListItem(index:number){
        this.listitem.splice(index,1);
        this.listChanged.next(this.listitem.slice());
      }
}
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Listitem } from 'src/app/shared/content.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listedit',
  templateUrl: './listedit.component.html',
  styleUrls: ['./listedit.component.css']
})
export class ListeditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  edittedItemIndex: number;
  edittedItem: Listitem;
  @ViewChild('f') slForm: NgForm;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.edittedItemIndex = index;
        this.edittedItem = this.shoppingService.getListItem(index);
        this.slForm.setValue({
          name: this.edittedItem.name,
          amount: this.edittedItem.amount
        })
      }
    )
  }

  onAddContent(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;
    if (this.editMode) {
      this.shoppingService.updateListItem(this.edittedItemIndex, { name, amount })
    }
    else {
      this.shoppingService.listAdd({ name, amount })
    }
    form.reset();
    this.editMode = false;
  }
  onReset() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingService.deleteListItem(this.edittedItemIndex);
    this.onReset();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Listitem } from 'src/app/shared/content.model';

@Component({
  selector: 'app-listedit',
  templateUrl: './listedit.component.html',
  styleUrls: ['./listedit.component.css']
})
export class ListeditComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  @Output() inputAdded = new EventEmitter<Listitem>();
  constructor() {
  }

  ngOnInit(): void {
  }
  onAddContent(){
    const name =this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    this.inputAdded.emit({name, amount})
  }
}

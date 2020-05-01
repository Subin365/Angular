import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    //this.postCreated.emit(post);
  }
}

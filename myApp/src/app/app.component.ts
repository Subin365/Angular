import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  Resetter = "";
  display = 'none';
  toggleLog = [];
  count = 0;
  color:string;
  onreset() {
    this.Resetter = "";
  }
  toggler() {
    this.toggleLog.push(++this.count);
    if (this.count>=5)  this.color = 'red';
  }
  
} 
import { Component, OnInit } from '@angular/core';
import {LoggedinService} from './loggedin.service'
@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css'],
  providers:[LoggedinService]
})
export class LoggedinComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}

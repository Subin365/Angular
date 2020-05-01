import { Component, OnInit } from '@angular/core';
import { SeatSelectionService } from './seat-selection.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css'],
  providers:[SeatSelectionService]
})
export class SeatSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoggedinService } from '../../loggedin.service';
import { SeatSelectionService } from '../seat-selection.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loggedinService: LoggedinService,
    private seatSelectionService:SeatSelectionService) { }

  seatsAvailable: string[];
  seatNumber: number[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.seatSelectionService.regNo = param['regno'];
        this.seatSelectionService.date = param['date']
        this.seatNumber = this.seatSelectionService.seatNumber;
        console.log(this.seatSelectionService.date)
      }
    )
    this.seatsAvailable = this.loggedinService.getUserGenderArray(this.seatSelectionService.regNo, this.seatSelectionService.date);
    console.log(this.seatsAvailable);
  }

  onSeatSelected(selectedSeatNumber: any) {
    // redirect to summary and updatae the detials
    if (this.seatsAvailable[selectedSeatNumber] === 'occupied.png') {
      alert('The seat you selected is reserved!')
    }
    else {
      console.log(this.seatSelectionService.seatNumber.indexOf(selectedSeatNumber))
      if (this.seatSelectionService.seatNumber.indexOf(selectedSeatNumber) !== -1) {
        this.seatSelectionService.seatNumber.splice(this.seatSelectionService.seatNumber.indexOf(selectedSeatNumber), 1)
        this.seatSelectionService.onCalculateFare.next();
      }
      else {
        this.seatSelectionService.seatNumber.push(selectedSeatNumber);
    this.seatSelectionService.onCalculateFare.next();
      }
    }
  }

  onSeatConfirmation(seatNumber: any) {
    this.loggedinService.onBooked(seatNumber, this.seatSelectionService.regNo);
    this.router.navigate(['payment'], { relativeTo: this.route });
  }
}

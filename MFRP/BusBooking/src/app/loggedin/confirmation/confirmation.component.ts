import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '../loggedin.service';
import { SharedBusdetailsModel } from '../shared/shared.busdetails.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private loggedInService:LoggedinService) { }

  boardingPoint:string;
  destinationPoint:string;
  date:string;
  fare:number;
  totalNoOfSeats : number;
  regNo : string;
  passengerList:{name:string,gender:string,seatNo:number}[] = [];
  busName:string;
  busDetails:SharedBusdetailsModel;

  ngOnInit(): void {
    this.passengerList = this.loggedInService.passengerList;
    this.date = this.loggedInService.date;
    this.fare = this.loggedInService.totalFare;
    this.totalNoOfSeats = this.loggedInService.passengerList.length;
    this.busDetails = this.loggedInService.selectedBus;
    this.regNo = this.busDetails.regNo;
    this.boardingPoint = this.busDetails.boardingPoint;
    this.destinationPoint = this.busDetails.destinationPoint;
    this.busName = this.busDetails.name;
  }

}

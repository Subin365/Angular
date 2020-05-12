import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedinService } from '../../loggedin.service';
import { SharedBusdetailsModel } from '../../shared/shared.busdetails.model';
import { SeatSelectionService } from '../seat-selection.service';
import { FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { SharedUserdataModel } from '../../shared/shared.userdata.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  constructor(private loggedInService: LoggedinService,
    private seatSelectionService: SeatSelectionService,
    private router:Router,
    private route:ActivatedRoute) { }

  name: string;
  date: string;
  destinationPoint: string;
  boardingPoint: string;
  busDetails: SharedBusdetailsModel;
  loggedUserId = this.loggedInService.loggedinUserId;
  userData: SharedUserdataModel;
  seatNumber: number[];
  NoOfSeats: number;
  disable = true;
  passengerForm: FormGroup;
  fare: number;
  tax: number;
  totalFare: number;
  subscription:Subscription;

  ngOnInit(): void {
    this.busDetails = this.loggedInService.selectedBus;
    this.name = this.busDetails.name;
    this.date = this.seatSelectionService.date;
    this.destinationPoint = this.busDetails.destinationPoint;
    this.boardingPoint = this.busDetails.boardingPoint;
    this.seatNumber = this.seatSelectionService.seatNumber;
    this.NoOfSeats = this.seatSelectionService.seatNumber.length
    this.formInit()
    this.subscription =this.seatSelectionService.onCalculateFare.subscribe(() => {
      this.formInit()
      this.NoOfSeats = this.seatSelectionService.seatNumber.length;
      this.updateFareDetails();
    }

    )
  }
  private formInit() {
    let passengerList = new FormArray([]);
    this.userData = this.loggedInService.getUserDetails(this.loggedUserId);
    let username = null;
    let gender = null;
    let seatNo = null;
    if (this.seatSelectionService.seatNumber.length < 2) {
      let username = null;
      let gender = null;
      let seatNo = null;
      username = this.userData.name;
      gender = this.userData.gender;
      seatNo = this.seatNumber[0];
      console.log(seatNo)
      passengerList.push(
        new FormGroup({
          'name': new FormControl(username, Validators.required),
          'seatNo': new FormControl(seatNo, [Validators.required]),
          'gender': new FormControl(gender, [Validators.required])
        })
      )
    }
    else {
      let index = -1;
      this.seatNumber.forEach(element => {
        index++;
        if (index < 1) {
          let username = null;
          let gender = null;
          let seatNo = null;
          username = this.userData.name;
          gender = this.userData.gender;
          seatNo = element + 1;
          console.log(seatNo)
          passengerList.push(
            new FormGroup({
              'name': new FormControl(username, Validators.required),
              'seatNo': new FormControl(seatNo, [Validators.required]),
              'gender': new FormControl(gender, [Validators.required
              ])
            })
          )
        }
        else {
          let username = null;
          let gender = null;
          let seatNo = null;
          seatNo = element + 1;
          console.log(seatNo)
          passengerList.push(
            new FormGroup({
              'name': new FormControl(username, Validators.required),
              'seatNo': new FormControl(seatNo, [Validators.required]),
              'gender': new FormControl(gender, [Validators.required
              ])
            })
          )

        }

      });
    }
    this.passengerForm = new FormGroup({
      'passengerList': passengerList
    });
  }
  updateFareDetails(){
    this.fare = this.loggedInService.getFareDetails(this.seatNumber, this.loggedInService.date, this.loggedInService.regNo)
    this.tax = this.fare*(5/100);
    this.totalFare = this.tax+this.fare
    this.loggedInService.totalFare = this.totalFare;
    console.log(this.loggedInService.totalFare);
  }


  onSubmit() {
    this.loggedInService.onInitiatePayment(this.passengerForm.value.passengerList)
    this.router.navigate(['../payment',this.totalFare],{relativeTo:this.route})
  }


  get controls() { // a getter!
    return (<FormArray>this.passengerForm.get('passengerList')).controls;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

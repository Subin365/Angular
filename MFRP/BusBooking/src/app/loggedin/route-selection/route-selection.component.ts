import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedinService } from '../loggedin.service';
import { LoggedinModel } from '../loggedin.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-route-selection',
  templateUrl: './route-selection.component.html',
  styleUrls: ['./route-selection.component.css']
})
export class RouteSelectionComponent implements OnInit, OnDestroy {

  locSelected = false;
  desSelected = false;
  locations = [];
  destinations = [];
  location: string;
  destination: string;
  states = [];
  state: any;
  routeList: LoggedinModel[];
  availableBus: string[];
  busNotFound:boolean;
  busNo:string;
  date:string;
  availableBusUpdated = new Subscription;

  constructor(
    private LoggedinService: LoggedinService,
    private router:Router,
    private route:ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.routeList = this.LoggedinService.getRouteList();
    this.routeList.forEach(element => {
      this.states.push(element.name);
      this.locations = element.locations;
    });

    this.availableBusUpdated = this.LoggedinService.availableBusUpdated.subscribe(
      (availableBus)=>{
        this.availableBus = availableBus;
        this.busNotFound = false;
      }
    )
  }

  onFromStateSelected(item) {
    this.locSelected = true;
    this.routeList.forEach(element => {
      if (item === element.name) {
        this.locations = element.locations;
      }
    });
  }

  onToStateSelected(item) {
    this.desSelected = true;
    this.routeList.forEach(element => {
      if (item === element.name) {
        this.destinations = element.locations;
      }
    });
  }

  onFromlocationselected(location) {
    this.location = location;
  }
  onTolocationselected(destination) {
    this.destination = destination
  }
  onBusSearch(form:NgForm) {
    this.date = form.value.date;
    if (this.location === this.destination) {
      alert("Boarding Point and Destination cannot be same!");
      this.busNotFound = false;
    }
    else if(form.untouched){
      alert("Please select a date!");
    }
    else {
      this.LoggedinService.getBusList(this.location,this.destination,this.date)
      if(this.availableBus[0] === undefined){
        this.busNotFound = true;
      }
    }
  }
  onBusSelect(name:string){
    this.busNo = this.LoggedinService.getBusNo(name)
    this.LoggedinService.regNo = this.busNo;
    this.LoggedinService.date = this.date;
    this.router.navigate(["../seatSelection", this.busNo,this.date], {relativeTo: this.route})
  }

  onFocused(e) {
    // do something when input is focused
    console.log("focused changed")
    // add css styling using ngclaass

  }

  ngOnDestroy(){
    this.availableBusUpdated.unsubscribe();

  }
}

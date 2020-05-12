import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedinService } from '../loggedin.service';
import { LoggedinModel } from '../loggedin.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-route-selection',
  templateUrl: './route-selection.component.html',
  styleUrls: ['./route-selection.component.css'],
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
  availableBus = [];
  busNotFound: boolean;
  busNo: string;
  date: string;
  availableBusUpdated = new Subscription();
  currentDate = new Date();
  isLoading = false;
  isPageLoading = true;
  minDate = new Date(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth(),
    this.currentDate.getDate()
  );

  constructor(
    private LoggedinService: LoggedinService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isPageLoading = true;
    this.LoggedinService.fetchRouteList().subscribe((transfomedData) => {
      this.routeList = transfomedData;
      console.log(this.routeList);
      this.routeList.forEach((element) => {
        this.states.push(element.name);
        this.locations = element.locations;
        this.isPageLoading = false;
      });
    });
    this.availableBusUpdated = this.LoggedinService.availableBusUpdated.subscribe(
      (availableBus) => {
        this.isLoading = false;
        this.availableBus = availableBus;
        if (this.availableBus[0] === undefined) {
          this.busNotFound = true;
        } else {
          this.busNotFound = false;
        }
      }
    );
  }

  onFromStateSelected(item) {
    this.locSelected = true;
    this.routeList.forEach((element) => {
      if (item === element.name) {
        this.locations = element.locations;
      }
    });
  }

  onToStateSelected(item) {
    this.desSelected = true;
    this.routeList.forEach((element) => {
      if (item === element.name) {
        this.destinations = element.locations;
      }
    });
  }

  onFromlocationselected(location) {
    this.location = location;
  }
  onTolocationselected(destination) {
    this.destination = destination;
  }
  onBusSearch(form: NgForm) {
    this.date = form.value.date;
    if (this.location === this.destination) {
      alert('Boarding Point and Destination cannot be same!');
      this.busNotFound = false;
    } else if (form.untouched) {
      alert('Please select a date!');
    } else {
      this.isLoading = true;
      this.LoggedinService.getBusList(
        this.location,
        this.destination,
        this.date
      );
    }
  }
  onBusSelect(id: string) {
    console.log(id);
    this.LoggedinService.getBusDetails(id).subscribe((data) => {
      this.LoggedinService.selectedBus = data.busdetail;
      console.log(this.LoggedinService.selectedBus);
      this.LoggedinService.regNo = this.LoggedinService.regNo;
      this.LoggedinService.date = this.date;
      this.busNo = this.LoggedinService.regNo;
      this.router.navigate(['../seatSelection'], {
        relativeTo: this.route,
      });
    }); //edited till here
  }

  onFocused(e) {
    // do something when input is focused
    console.log('focused changed');
    // add css styling using ngclaass
  }

  ngOnDestroy() {
    this.availableBusUpdated.unsubscribe();
  }
}

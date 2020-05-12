import { LoggedinModel } from './loggedin.model';
import { SharedBusdetailsModel } from './shared/shared.busdetails.model';
import { Subject } from 'rxjs';
import { SharedUserdataModel } from './shared/shared.userdata.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoggedinService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchRouteList();
  }
  // private busdetails: SharedBusdetailsModel[] = [
  //   {
  //     name: 'AC  Scania',
  //     regNo: 'KL-61A-6540',
  //     contactNo: 8774563212,
  //     boardingPoint: 'Thiruvananthapuram',
  //     destinationPoint: 'Chennai',
  //     date_availability: [
  //       {
  //         date: '2020-04-08',
  //         seats: [
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //       {
  //         date: '2020-04-09',
  //         seats: [
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: 'SRM AirBus Ac',
  //     regNo: 'KL-51A-6541',
  //     contactNo: 6574563212,
  //     boardingPoint: 'Chennai',
  //     destinationPoint: 'Bengaluru Urban',
  //     date_availability: [
  //       {
  //         date: '2020-04-08',
  //         seats: [
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //       {
  //         date: '2020-04-09',
  //         seats: [
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: 'UTS Semi Sleeper',
  //     regNo: 'KL-41A-6542',
  //     contactNo: 5474563212,
  //     boardingPoint: 'Bengaluru Urban',
  //     destinationPoint: 'Thiruvananthapuram',
  //     date_availability: [
  //       {
  //         date: '2020-04-08',
  //         seats: [
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //       {
  //         date: '2020-04-09',
  //         seats: [
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: 'AC  Scania Deluxe',
  //     regNo: 'KL-31A-6543',
  //     contactNo: 3274563212,
  //     boardingPoint: 'Thiruvananthapuram',
  //     destinationPoint: 'Chennai',
  //     date_availability: [
  //       {
  //         date: '2020-04-08',
  //         seats: [
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //       {
  //         date: '2020-04-09',
  //         seats: [
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: 'UTS Semi Sleeper',
  //     regNo: 'KL-21A-6544',
  //     contactNo: 6474563212,
  //     boardingPoint: 'Chennai',
  //     destinationPoint: 'Bengaluru Urban',
  //     date_availability: [
  //       {
  //         date: '2020-04-08',
  //         seats: [
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //       {
  //         date: '2020-04-09',
  //         seats: [
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: 'SRM AirBus Ac',
  //     regNo: 'KL-01A-6545',
  //     contactNo: 3474563212,
  //     boardingPoint: 'Bengaluru Urban',
  //     destinationPoint: 'Thiruvananthapuram',
  //     date_availability: [
  //       {
  //         date: '2020-04-08',
  //         seats: [
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //       {
  //         date: '2020-04-09',
  //         seats: [
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321321, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 321654, fare: 1500 },
  //           { seatsStatus: 0, fare: 1500 },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  private userdata: SharedUserdataModel[] = [
    {
      name: 'Sam',
      email: 'sam@gmail.com',
      dob: '1997-1-12',
      id: 321654,
      mobileNo: 987456325,
      seatNo: -1,
      gender: 'male',
    },
    {
      name: 'Julie ',
      email: 'julie@gmail.com',
      dob: '1997-12-2',
      id: 321321,
      mobileNo: 996435325,
      seatNo: -1,
      gender: 'female',
    },
    {
      name: 'Smith ',
      email: 'smith@gmail.com',
      dob: '1987-11-12',
      id: 321387,
      mobileNo: 996468543,
      seatNo: -1,
      gender: 'male',
    },
  ];
  private passengers = [{ name: 'Subin Suresh', gender: 'male', seatNo: 3 }];
  availableBusUpdated = new Subject<string[]>();
  paymentConfirmation = new Subject<number>();
  availableBus: string[] = [];
  loggedinUserId: number = 321387;
  selectedSeat: number;
  selectedBus: SharedBusdetailsModel;

  passengerList: { name: string; gender: string; seatNo: number }[] = [];
  totalFare: number;
  regNo: string;
  date: string;

  addPassengers(name: string, gender: string, seatNo: number) {
    let id = null;
    let date = this.date;
    let regNo = this.selectedBus.regNo;
    let element = { name, gender, seatNo, date, regNo };
    this.http
      .post<{ message: string; postId: string }>(
        'http://localhost:3000/api/passenger',
        element
      )
      .subscribe((responseData) => {
        id = responseData.postId;
      });
    return parseInt(id);
  }
  fetchBusDetail(id: string) {
    return this.http.get<{ message: string; busdetail: SharedBusdetailsModel }>(
      'http://localhost:3000/api/busdetail/' + id
    );
  }

  fetchbuslist(boardingPoint, destinationPoint, date) {
    return this.http.get<{
      message: string;
      busList: any[];
    }>(
      'http://localhost:3000/api/buslist/' +
        boardingPoint +
        '/' +
        destinationPoint +
        '/' +
        date
    );
  }

  fetchRouteList() {
    return this.http
      .get<{
        message: string;
        posts: any[];
      }>('http://localhost:3000/api/routelists')
      .pipe(
        map((responseData) => {
          return responseData.posts.map((post) => {
            return {
              name: post.name,
              locations: post.locations,
            };
          });
        })
      );
  }
  pushBusDetail(element) {
    console.log(this.regNo);
    this.http
      .post<any>('http://localhost:3000/api/busdetail/update', element)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getBusList(boardingPoint: string, destinationPoint: string, date: string) {
    this.availableBus = [];
    this.fetchbuslist(boardingPoint, destinationPoint, date).subscribe(
      (data) => {
        this.availableBus = data.busList;
        this.availableBusUpdated.next(this.availableBus);
      }
    );
  }

  getBusDetails(id: string) {
    return this.fetchBusDetail(id);
  }

  getBusNo(name: string) {
    return this.selectedBus.regNo;
  }

  getUserDetails(id: number) {
    let userdata: SharedUserdataModel = null;
    this.userdata.forEach((item) => {
      if (item.id === id) {
        userdata = item;
      }
    });
    return userdata;
  }
  // should add gender differentiantion code to it
  getUserGenderArray() {
    let genderArray: string[] = [];
    let userdata: SharedUserdataModel;
    let seats: {
      seatsStatus: number;
      fare: number;
    }[];
    console.log(this.selectedBus);
    this.selectedBus.date_availability.forEach((item) => {
      if (item.date === this.date) {
        seats = item.seats;
      }
    });
    seats.forEach((item) => {
      userdata = this.getUserDetails(item.seatsStatus);
      if (item.seatsStatus === 0) {
        genderArray.push('available.png');
      } else {
        genderArray.push('occupied.png');
      }
    });
    return genderArray;
  }

  getSeatsArray(busdetails: SharedBusdetailsModel, date: string) {
    let index = -1;
    let seatsArray: {
      seatsStatus: number;
      fare: number;
    }[];
    this.selectedBus.date_availability.forEach((element) => {
      index++;
      if (element.date === date) {
        seatsArray = element.seats;
      }
    });
    return seatsArray;
  }

  getFareDetails(seats: number[], date: string, regNo: string) {
    let busdetails: SharedBusdetailsModel;
    let fare = 0;
    // busdetails = this.getBusDetails(regNo);
    let seatsArray: {
      seatsStatus: number;
      fare: number;
    }[];
    seatsArray = this.getSeatsArray(this.selectedBus, date);
    seats.forEach((element) => {
      fare += seatsArray[element].fare;
    });
    return fare;
  }

  onAddUser(passengerName: string, gndr: string, seatnumber: number) {
    let id = -1;
    // this.userdata.push({
    //   name: passengerName,
    //   dob: '',
    //   email: '',
    //   gender: gndr,
    //   id: id,
    //   mobileNo: 0,
    //   seatNo: seatnumber,
    // });
    this.addPassengers(passengerName, gndr, seatnumber);
    console.log(passengerName, gndr, seatnumber);
    let index = -1;
    this.selectedBus.date_availability.forEach((element) => {
      index++;
      if (element.date === this.date) {
        this.selectedBus.date_availability[index].seats[
          seatnumber
        ].seatsStatus = id;
      }
    }); //add user details to bus
    this.pushBusDetail(this.selectedBus);
    console.log(this.selectedBus);
  }
  onInitiatePayment(
    passengerList: { name: string; gender: string; seatNo: number }[]
  ) {
    this.passengerList = passengerList;
  }

  paymentConfirmed() {
    let bookingStatus = false;
    this.passengerList.forEach((element) => {
      this.onAddUser(element.name, element.gender, +element.seatNo);
      bookingStatus = true;
      return bookingStatus;
    }); //to add bus details to user

    return bookingStatus;
  }

  onBooked(index: number, regNo: string) {
    this.paymentConfirmation.subscribe((transactionId: number) => {
      // this.bookSeats()
    });
  }
}

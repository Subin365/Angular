import { LoggedinModel } from './loggedin.model'
import { SharedBusdetailsModel } from './shared/shared.busdetails.model';
import { Subject } from 'rxjs';
import { SharedUserdataModel } from './shared/shared.userdata.model';

export class LoggedinService {
  constructor() { }
  // this is for available route services
  private routeList: LoggedinModel[] = [{
    name: "Kerala",
    locations: [
      "Thiruvananthapuram", "Kollam",
      "Alappuzha", "Pathanamthitta",
      "Kottayam", "Idukki",
      "Ernakulam", "Thrissur",
      "Palakkad", "Malappuram",
      "Kozhikode", "Wayanad",
      "Kannur", "Kasaragod"]
  }, {
    name: "TamilNadu",
    locations: ["Chennai", "Coimbatore",
      "Cuddalore", "Dharmapuri",
      "Dindigul", "Erode",
      "Kanchipuram", "Kanyakumari",
      "Karur", "Krishnagiri",
      "Kallakurichi", "Madurai",
      "Mayiladuthurai", "Nagapattinam",
      "Namakkal", "Perambalur",
      "Pudukkottai", "Ramanathapuram",
      "Salem", "Sivagangai",
      "Thanjavur", "Nilgiris",
      "Theni", "Thoothukudi",
      "Tiruchirapalli", "Tirunelveli",
      "Tiruvallur", "Tiruvannamalai",
      "Tiruvarur", "Vellore",
      "Viluppuram", "Virudhunagar",
      "Ariyalur", "Tirupur"]
  }, {
    name: "Karnataka",
    locations: ["Bagalkot", "Belagavi",
      "Vijayapura", "Dharwad",
      "Gadag", "Haveri",
      "Uttara Kannada", "Bengaluru Urban",
      "Bengaluru Rural", "Chikkaballapur",
      "Chitradurga", "Davanagere",
      "Kolar", "Ramanagara",
      "Shivamogga", "Tumakuru",
      "Ballari", "Bidar",
      "Kalaburagi", "Koppal",
      "Raichur", "Yadgir",
      "Chamarajanagar", "Chikkamagaluru",
      "Dakshina Kannada", "Hassan",
      "Kodagu", "Mandya", "Mysuru",
      "Udupi",]
  }
  ];
  private busdetails: SharedBusdetailsModel[] = [{
    name: "AC  Scania",
    regNo: "KL-61A-6540",
    contactNo: 8774563212,
    boardingPoint: "Thiruvananthapuram",
    destinationPoint: "Chennai",
    date_availability: [{
      date: "2020-04-08",
      seats: [
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    },
    {
      date: "2020-04-09",
      seats: [
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    }
    ]
  }, {
    name: "SRM AirBus Ac",
    regNo: "KL-51A-6541",
    contactNo: 6574563212,
    boardingPoint: "Chennai",
    destinationPoint: "Bengaluru Urban",
    date_availability: [{
      date: "2020-04-08",
      seats: [
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    },
    {
      date: "2020-04-09",
      seats: [
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    }
    ]
  }, {
    name: "UTS Semi Sleeper",
    regNo: "KL-41A-6542",
    contactNo: 5474563212,
    boardingPoint: "Bengaluru Urban",
    destinationPoint: "Thiruvananthapuram",
    date_availability: [{
      date: "2020-04-08",
      seats: [
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    },
    {
      date: "2020-04-09",
      seats: [
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    }
    ]
  }, {
    name: "AC  Scania Deluxe",
    regNo: "KL-31A-6543",
    contactNo: 3274563212,
    boardingPoint: "Thiruvananthapuram",
    destinationPoint: "Chennai",
    date_availability: [{
      date: "2020-04-08",
      seats: [
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    },
    {
      date: "2020-04-09",
      seats: [
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    }
    ]
  }, {
    name: "UTS Semi Sleeper",
    regNo: "KL-21A-6544",
    contactNo: 6474563212,
    boardingPoint: "Chennai",
    destinationPoint: "Bengaluru Urban",
    date_availability: [{
      date: "2020-04-08",
      seats: [
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    },
    {
      date: "2020-04-09",
      seats: [
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    }
    ]
  }, {
    name: "SRM AirBus Ac",
    regNo: "KL-01A-6545",
    contactNo: 3474563212,
    boardingPoint: "Bengaluru Urban",
    destinationPoint: "Thiruvananthapuram",
    date_availability: [{
      date: "2020-04-08",
      seats: [
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    },
    {
      date: "2020-04-09",
      seats: [
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321321, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 0, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 321654, fare: 1500 },
        { seatsStatus: 0, fare: 1500 }
      ]
    }
    ]
  },
  ];
  private userdata: SharedUserdataModel[] = [
    {
      name: "Sam",
      email: "sam@gmail.com",
      dob: "1997-1-12",
      id: 321654,
      mobileNo: 987456325,
      seatNo: -1,
      gender: "male",
    },
    {
      name: "Julie ",
      email: "julie@gmail.com",
      dob: "1997-12-2",
      id: 321321,
      mobileNo: 996435325,
      seatNo: -1,
      gender: "female",
    },
    {
      name: "Smith ",
      email: "smith@gmail.com",
      dob: "1987-11-12",
      id: 321387,
      mobileNo: 996468543,
      seatNo: -1,
      gender: "male",
    }
  ]

  availableBusUpdated = new Subject<string[]>();
  paymentConfirmation = new Subject<number>();
  availableBus: string[] = [];
  loggedinUserId: number = 321387;
  selectedSeat: number;
  
  passengerList:{name:string,gender:string,seatNo:number}[] = [];
  totalFare:number; 
  regNo: string;
  date: string;


  getRouteList() {
    return this.routeList.slice();
  }

  getDateAvailability(date: string, index: number) {
    let returnvalue = false
    console.log(this.busdetails[index])
    this.busdetails[index].date_availability.forEach(item => {
      if (item.date === date) {
        returnvalue = true
      }
    })
    return returnvalue
  }

  getBusList(boardingPoint: string, destinationPoint: string, date: string) {
    this.availableBus = [];
    let index = -1;
    this.busdetails.forEach(element => {
      index++;
      if (element.boardingPoint === boardingPoint) {
        if (element.destinationPoint === destinationPoint) {
          if (this.getDateAvailability(date, index)) {
            this.availableBus.push(element.name);
          }
        }
      }
    });
    this.availableBusUpdated.next(this.availableBus);
  }
  getBusNo(name: string) {
    let regNo: string;
    this.busdetails.forEach(item => {
      if (name === item.name) {
        regNo = item.regNo;
      }
    })
    return regNo;
  }
  getBusDetails(regNo: string) {
    let busdetails: SharedBusdetailsModel;
    this.busdetails.forEach(element => {
      if (element.regNo === regNo) {
        busdetails = element;
      }
    });
    return busdetails;
  }
  getUserDetails(id: number) {
    let userdata: SharedUserdataModel = null;
    this.userdata.forEach(item => {
      if (item.id === id) {
        userdata = item;
      }
    })
    return userdata;
  }
  // should add gender differentiantion code to it
  getUserGenderArray(regNo: string, date: string) {
    let busdetails: SharedBusdetailsModel = this.getBusDetails(regNo)
    let genderArray: string[] = [];
    let userdata: SharedUserdataModel;
    let seats: {
      seatsStatus: number,
      fare: number
    }[];
    busdetails.date_availability.forEach(item => {
      console.log("inside")
      if (item.date === date) {
        seats = item.seats;
      }
    })
    seats.forEach(item => {
      userdata = this.getUserDetails(item.seatsStatus)
      if (userdata === null) {
        genderArray.push("available.png")
      }
      else {
        genderArray.push("occupied.png")
      }
    })
    return genderArray;
  }
  getSeatsArray(busdetails: SharedBusdetailsModel, date: string) {
    let index = -1; let seatsArray: {
      seatsStatus: number,
      fare: number
    }[];
    busdetails.date_availability.forEach(element => {
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
    busdetails = this.getBusDetails(regNo);
    let seatsArray: {
      seatsStatus: number,
      fare: number
    }[];
    seatsArray = this.getSeatsArray(busdetails, date)
    seats.forEach(element => {
      fare += seatsArray[element].fare;
    });
    return fare;
  }

  onAddUser(passengerName:string , gndr:string , seatnumber:number ) {
    this.userdata.push(
      {
        name: passengerName,
        dob: '',
        email: '',
        gender: gndr,
        id: 0,
        mobileNo: 0,
        seatNo: seatnumber
      }
    )
  }
  onInitiatePayment(passengerList:{name:string,gender:string,seatNo:number}[]){
    this.passengerList = passengerList
  }

  paymentConfirmed(){
    let bookingStatus = false;
    this.passengerList.forEach(element => {
      this.onAddUser(element.name,element.gender,+element.seatNo);
      bookingStatus = true;
      return bookingStatus;
    });
    return bookingStatus;
  }

  onBooked(index: number, regNo: string) {
    this.paymentConfirmation.subscribe((transactionId: number) => {
      // this.bookSeats()
    })
  }

}
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bus-Booking';
   data1 = [
     "Thiruvananthapuram",
 "Kollam",
 "Alappuzha",
 "Pathanamthitta",
 "Kottayam",
 "Idukki",
 "Ernakulam",
 "Thrissur",
 "Palakkad",
 "Malappuram",
 "Kozhikode",
 "Wayanad",
 "Kannur",
 "Kasaragod",
   ];
   data3 = [
    "Thiruvananthapuram",
"Kollam",
"Alappuzha",
"Pathanamthitta",
"Kottayam",
"Idukki",
"Ernakulam",
"Thrissur",
"Palakkad",
"Malappuram",
"Kozhikode",
"Wayanad",
"Kannur",
"Kasaragod",
  ];
  data2 = [
    "Thiruvananthapuram",
"Kollam",
"Alappuzha",
"Pathanamthitta",
"Kottayam",
"Idukki",
"Ernakulam",
"Thrissur",
"Palakkad",
"Malappuram",
"Kozhikode",
"Wayanad",
"Kannur",
"Kasaragod",
  ];
//   myControl = new FormControl();
  // states;
  // constructor(){
  //    this.loadStates();
  // }
  // //build list of states as map of key-value pairs
  // loadStates() {
  //    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
  //       Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
  //       Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
  //       Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
  //       North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
  //       South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
  //       Wisconsin, Wyoming';
  //    this.states =  allStates.split(/, +/g).map( function (state) {
  //       return {
  //          value: state.toUpperCase(),
  //          display: state
  //       };
  //    });
  // }
  keyword = 'name';
  
  // data = [
  //    {
  //      id: 1,
  //      name: 'Dakota Gaylord PhD',
  //      address: '14554 Smith Mews'
  //    },
  //    {
  //      id: 2,
  //      name: 'Maria Legros',
  //      address: '002 Pagac Drives'
  //    },
  //    {
  //      id: 3,
  //      name: 'Brandyn Fritsch',
  //      address: '8542 Lowe Mountain'
  //    },
  //    {
  //      id: 4,
  //      name: 'Glenna Ward V',
  //      address: '1260 Oda Summit'
  //    },
  //    {
  //      id: 5,
  //      name: 'Jamie Veum',
  //      address: '5017 Lowe Route'
  //    }
  // ];
 
  constructor() { }
 
  ngOnInit() {
  }
 
  selectEvent(item) {
    console.log(item);
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
 
}


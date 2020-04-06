import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Employee: any = [];
  text: string = '';
  head: string[] = [];

  constructor(private apiService: ApiService) {
    this.readEmployee();

  }

  ngOnInit() { }

  readEmployee() {
    this.apiService.getEmployees().subscribe((data) => {
      this.Employee = data;
      this.Employee.forEach(element => {
        this.head.push(element.name);
      });
    })
  }

  removeEmployee(employee, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteEmployee(employee._id).subscribe((data) => {
        this.Employee.splice(index, 1);
      }
      )
    }
  }
  ahead(event: any) {
    this.text += event.key;
    console.log(this.text)
    this.head.filter((item)=>{
      
    })
  }
}

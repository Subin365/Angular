import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {  
  submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() {
   }

  mainForm() {
    this.employeeForm = this.fb.group({
      name: [''],
      email: [''],
      designation: ['']
    })
  }


  // Choose designation with select dropdown
  updateProfile(e){
    this.employeeForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  

  onSubmit() {
    this.submitted = true;
    console.log(this.employeeForm)
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.router.navigate(['/employees-list'])
        }, (error) => {
          console.log(error);
        });
    }
  }


}
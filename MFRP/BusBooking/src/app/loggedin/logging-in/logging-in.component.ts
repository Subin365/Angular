import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-logging-in',
  templateUrl: './logging-in.component.html',
  styleUrls: ['./logging-in.component.css']
})
export class LoggingInComponent implements OnInit {
  signup = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmitLogin(form: NgForm) {
    console.log(form.value.email);
    console.log(form.value.password);
    this.router.navigate(['../routeSelection'], { relativeTo: this.route })
  }
  onSignup() {
    this.router.navigate(['signup'])
  }
}

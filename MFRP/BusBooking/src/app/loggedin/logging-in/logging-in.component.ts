import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoggedinService } from '../loggedin.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-logging-in',
  templateUrl: './logging-in.component.html',
  styleUrls: ['./logging-in.component.css'],
})
export class LoggingInComponent implements OnInit {
  signup = true;
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loggingService: LoggedinService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}
  onSubmitLogin(form: NgForm) {
    // console.log(form.value.email);
    // console.log(form.value.password);
    // this.loggingService.upload();

    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }
    //this.router.navigate(['../routeSelection'], { relativeTo: this.route });

  onSignup() {
    this.router.navigate(['signup']);
  }
}

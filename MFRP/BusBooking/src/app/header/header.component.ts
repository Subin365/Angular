import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { LoggedinService } from '../loggedin/loggedin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logginPage = true;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private loggedinService: LoggedinService
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot);
  }
  onLogout() {
    this.authService.logout();
  }

  onclick() {
    //this.loggedinService.upload();
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinService } from '../loggedin.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private loggedInService:LoggedinService) { }
  transactionNumber: number;
  paymentStatus: boolean;
  bookingStatus:boolean;
  bookingFailed:boolean;

  ngOnInit(): void {
    this.transactionNumber = Math.floor(Math.random() * 100000 + 100000);
    this.paymentStatus = false;
    this.bookingStatus = false;
    this.bookingFailed = false;
  }
  onSubmit(form: NgForm) {
    console.log(form.value)
    this.doPayment(form.value)
  }
  doPayment(form: object) {
    setTimeout(() => {
      this.paymentStatus = true;
      this.bookingStatus = this.loggedInService.paymentConfirmed()
      setTimeout(() => {
        this.router.navigate(['../../confirmation'], { relativeTo: this.route })
      },5000)
    }, 500);
  }
}

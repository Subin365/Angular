import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { SignupComponent } from './signup/signup.component';
import { LoggingInComponent } from './loggedin/logging-in/logging-in.component';
import { RouteSelectionComponent } from './loggedin/route-selection/route-selection.component';
import { SeatSelectionComponent } from './loggedin/seat-selection/seat-selection.component';
import { PaymentComponent } from './loggedin/payment/payment.component';
import { ConfirmationComponent } from './loggedin/confirmation/confirmation.component';


const routes: Routes = [
  { path: '', redirectTo: 'loggedin/loggingIn', pathMatch: 'full' },
  {
    path: 'loggedin', component: LoggedinComponent,
    children: [
      { path: 'loggingIn', component: LoggingInComponent },
      { path: 'routeSelection', component: RouteSelectionComponent },
      { path: 'seatSelection/:regno/:date', component: SeatSelectionComponent },
      { path: 'payment/:totalFare', component: PaymentComponent },
      { path: 'confirmation', component: ConfirmationComponent }
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'loggedin/loggingIn', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

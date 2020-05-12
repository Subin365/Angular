import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { SignupComponent } from './signup/signup.component';
import { LoggingInComponent } from './loggedin/logging-in/logging-in.component';
import { RouteSelectionComponent } from './loggedin/route-selection/route-selection.component';
import { SeatSelectionComponent } from './loggedin/seat-selection/seat-selection.component';
import { PaymentComponent } from './loggedin/payment/payment.component';
import { ConfirmationComponent } from './loggedin/confirmation/confirmation.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'loggedin/loggingIn', pathMatch: 'full' },
  {
    path: 'loggedin',
    component: LoggedinComponent,
    children: [
      { path: 'loggingIn', component: LoggingInComponent },
      {
        path: 'routeSelection',
        component: RouteSelectionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'seatSelection',
        component: SeatSelectionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'payment/:totalFare',
        component: PaymentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'loggedin/loggingIn', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

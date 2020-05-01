import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouteSelectionComponent } from './loggedin/route-selection/route-selection.component';
import { SeatSelectionComponent } from './loggedin/seat-selection/seat-selection.component';
import { PaymentComponent } from './loggedin/payment/payment.component';
import { ConfirmationComponent } from './loggedin/confirmation/confirmation.component';
import { SelectionComponent } from './loggedin/seat-selection/selection/selection.component';
import { SummaryComponent } from './loggedin/seat-selection/summary/summary.component';
import { LoggingInComponent } from './loggedin/logging-in/logging-in.component';
import { SignupComponent } from './signup/signup.component';
import {LoggedinComponent} from './loggedin/loggedin.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RouteSelectionComponent,
    SeatSelectionComponent,
    PaymentComponent,
    ConfirmationComponent,
    SelectionComponent,
    SummaryComponent,
    LoggedinComponent,
    LoggingInComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

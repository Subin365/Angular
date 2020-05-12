import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { LoggedinComponent } from './loggedin/loggedin.component';
import { AuthInterceptor } from './auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

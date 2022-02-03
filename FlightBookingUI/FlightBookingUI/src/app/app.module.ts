import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import {HttpClientModule} from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserBookingService } from './user-booking.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component'


@NgModule({
  declarations: [
    AppComponent,
    FlightDetailsComponent,
    BookComponent,
    PaymentComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule
   
  ],
  providers: [UserBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}


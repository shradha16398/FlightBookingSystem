import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import {HttpClientModule} from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserBookingService } from './book/user-booking.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar'
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { MatCommonModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CheckInComponent } from './check-in/check-in.component'

import {MatTabsModule} from '@angular/material/tabs';
import { CancleBookingComponent } from './cancle-booking/cancle-booking.component';
import { PageNotFoundComponent } from './cancle-booking/page-not-found/page-not-found.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { Admin1Component } from './admin1/admin1.component'


@NgModule({
  declarations: [
    AppComponent,
    FlightDetailsComponent,
    BookComponent,
    PaymentComponent,
    SearchComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CheckInComponent,
    CancleBookingComponent,
    PageNotFoundComponent,
    PagenotFoundComponent,
    Admin1Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCommonModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,

    
  ],
  providers: [UserBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}


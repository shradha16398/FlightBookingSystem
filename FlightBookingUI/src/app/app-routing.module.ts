import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CancleBookingComponent } from './cancle-booking/cancle-booking.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"allflights",component:FlightDetailsComponent},
  {path:"book", component:BookComponent},
  {path:"book/payment",component:PaymentComponent},                                        
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"search",component:SearchComponent},
  {path:"checkin",component:CheckInComponent},
  {path:"cancle",component:CancleBookingComponent},
  {path:"page-not-found", component:PagenotFoundComponent},
  {path:"**",redirectTo:'page-not-found',pathMatch:'full'}
  
]

@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forRoot(routes)],
  
})
export class AppRoutingModule { }

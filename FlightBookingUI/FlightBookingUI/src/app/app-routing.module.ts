import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { PaymentComponent } from './payment/payment.component';

const routes:Routes=[
  {path:"",component:FlightDetailsComponent},
  {path:"book", component:BookComponent},
  {path:"book/payment",component:PaymentComponent}
]

@NgModule({
  declarations: [],
  imports: 
    [RouterModule.forRoot(routes)],
  
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  
  public doPayment(payment:Payment){
    return this.http.post("http://localhost:8083/pay/add",payment,{responseType:'text' as 'json'})
  }
}

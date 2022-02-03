import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancleBookingService {

  checkinUrl = "http://localhost:8083/pay/cancel/"
  constructor(private http: HttpClient) { }

  cancleBooking(pnrNo:any):Observable<any>{
    return this.http.delete(this.checkinUrl + pnrNo,{responseType: 'text'})
  }
}

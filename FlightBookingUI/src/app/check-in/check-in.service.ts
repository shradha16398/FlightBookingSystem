import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckinData } from './checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
checkinUrl = "http://localhost:8086/checkIn/get/checkin/"
  constructor(private http: HttpClient) { }

  checkinData(pnrNo:any):Observable<any>{
    return this.http.get<any>(this.checkinUrl + pnrNo)
  }

 }

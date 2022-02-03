import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PnrData } from './pnrData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  pnrUrl = "http://localhost:8086/checkIn/get/checkin/"

  constructor(private http : HttpClient) { }
  PnrData(pnrNo:any):Observable<PnrData[]>{
    return this.http.get<PnrData[]>(this.pnrUrl+pnrNo);
    
  }
}

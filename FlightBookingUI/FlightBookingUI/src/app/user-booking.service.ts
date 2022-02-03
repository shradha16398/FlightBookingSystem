import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserBookingService {

  constructor(private http:HttpClient) { }

  public doBooking(user: User){
    return this.http.post("http://localhost:8082/user/book/add",user,{responseType:'text' as 'json'})
  }
}

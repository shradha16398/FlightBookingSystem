import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flight:any

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response = this.http.get("http://localhost:8081/admin/all")
    response.subscribe((data)=>{
    this.flight = data;
      console.log(data,"&&&&&&&&&&&&");
      // let objectKeys = Object.keys(data);
      // console.log(objectKeys,"##########");
      
    })
  }

}

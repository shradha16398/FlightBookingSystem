import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flight:any
  flightNo:any
  Search:any

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response = this.http.get("http://localhost:9000/admin/all")
    response.subscribe((data)=>{
    this.flight = data;
      console.log(data,"&&&&&&&&&&&&");
    
    })
  }


        //let objectKeys = Object.keys(data);
      // console.log(objectKeys,"##########");
  // Search(){
  //   if(this.flightNo==""){
  //     this.ngOnInit();
  //   }else{
  //     this.flight=this.flight.filter(res=>){
  //       return res.flightNo.toLocalLowerCase().match(this.flightNo.toLocalLowerCase());
  //     }
  //   }
  // }

}

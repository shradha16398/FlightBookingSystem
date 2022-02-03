import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  search:any
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response=this.http.get("http://localhost:8084/user/flightNo/{flightNo}");
    response.subscribe((data)=>this.search=response);
  }

}

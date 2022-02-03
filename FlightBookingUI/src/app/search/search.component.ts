import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Search } from './search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchBar : String ="";
  search: Search[] |any;
  flightNo: any;
  flight: any;
  pnrNo: any;
  name: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    // let response=this.http.get("http://localhost:3000/status");
    // response.subscribe((data)=>{
    //   this.search = data;
    //     console.log(data,"&&&&&&&&&&&&");
    //   })


      let response=this.http.get("http://localhost:8086/checkIn/getAll");
      response.subscribe((data)=>{
        this.search = data;
          console.log(data,"User Details");
        })
  

    }

    
     
     
  SearchbyPnr(){
    if(this.name=='')
    {
      this.ngOnInit();
    }else{
      this.search=this.search.filter((res: any)=>{
        return res.name.match(this.name)
      }
      )}
  }

  }
  //   let response=this.http.get("http://localhost:8084/user/status/7513990040");
  //   response.subscribe((data)=>this.search=data
  //   )
    
  // }



import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { User } from '../user';
import { UserBookingService } from '../user-booking.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import {AbstractControl} from "@angular/forms"

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
       adults: any;
        age: any;
        children: any;
        classType: any;
        endPoint: any;
        flightNo: any;
        id: any;
        name: any;
        payment: any;
        pnrNo: any;
        sex: any;
        startPoint: any;
        bookform:any
// user: User = new User(0,0,0,"","",0,0,"","",0,"","");
message:any;

  constructor(private service:UserBookingService,private snackBar:MatSnackBar, private fb:FormBuilder) { }

  ngOnInit(){

    document.getElementsByTagName('div')[0].focus();
    
    this.bookform = this.fb.group({
      adults:['',[Validators.required]],
      age:['',[Validators.required]],
      children:['',[Validators.required]],
      classType:['',[Validators.required]],
      endPoint:['',[Validators.required]],
      flightNo:['',[Validators.required]],
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      payment:['',[Validators.required]],
      pnrNo:['',[Validators.required]],
      sex:['',[Validators.required]],
      startPoint:['',[Validators.required]],
  

    })
  }

  openSnackBar(message:string,action:string){
    this.snackBar.open(message,action,{
      duration:10000,
      verticalPosition:'top',
      panelClass:['snackBar-position'],
      horizontalPosition:"center"
    })
  }
 bookNow(){
  let response = this.service.doBooking(this.bookform.value);
  response.subscribe((data)=>{
    this.openSnackBar("Flight will be booked succesfully after the Payment",'ok')
    this.message = data
    console.log(data,"!!!!!!!!!!!!!!");
    

  })
 

  


}
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CancleBookingService } from './cancle-booking.service';

@Component({
  selector: 'app-cancle-booking',
  templateUrl: './cancle-booking.component.html',
  styleUrls: ['./cancle-booking.component.css']
})
export class CancleBookingComponent implements OnInit {
  cancleform: any;
  errorMessage: any;
  message: any;
  error:any;
  success:any;
  successMessage:string = "";
  pnrNo:number = 0;

  constructor(private route:ActivatedRoute,private snackBar:MatSnackBar,private router:Router,private service:CancleBookingService,private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(){
    this.route.params.subscribe(param=>{
      this.pnrNo = param['pnrNo'];
     
    })

    document.getElementsByTagName('div')[0].focus();
    
    this.cancleform = this.fb.group({
      
      pnrNo:['',[Validators.required]],
      
      })
    }
      
      openSnackBar(message:any,action:string){
        this.snackBar.open(message,action,{
          duration:10000,
          verticalPosition:'top',
          panelClass:['snackBar-position'],
          horizontalPosition:"center"
        })
      }
      cancleBookings(){
        this.successMessage = this.errorMessage="";
        let formObj = this.pnrNo
        this.service.cancleBooking(formObj).subscribe(
          (response)=>{this.successMessage=response.message;
            console.log(response,"$$$$$$$$$$$$$$");
            
          this.openSnackBar(response,'ok')
          this.router.navigate(['/home'])
        
        },
          
          (err:any)=>{this.errorMessage=err.error.message
          console.log(err,"error");}
          
        )
    
    
      }
    
}



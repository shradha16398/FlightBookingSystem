import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
    cardNo: any;
    pnrNo: any;
    cvv: any;
    bankName: any;
    classType: any;
    paymentForm:any;
    message:any

  constructor(private router:Router,private service:PaymentService,private http:HttpClient,private snackBar:MatSnackBar, private fb:FormBuilder) { }

  ngOnInit() {
    document.getElementsByTagName('div')[0].focus();
    
    this.paymentForm = this.fb.group({
      cardNo:['',[Validators.required]],
      pnrNo:['',[Validators.required]],
      cvv:['',[Validators.required]],
      bankName:['',[Validators.required]],
      classType:['',[Validators.required]],
     
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
  payNow(){
    let response = this.service.doPayment(this.paymentForm.value);
    response.subscribe((data)=>{
      this.openSnackBar("Payment Successful",'ok')
      this.router.navigate(['/checkin'])
      this.message = data
      
      console.log(data,"!!!!!!!!!!!!!!");
      
  
    })

  
  
  }
}

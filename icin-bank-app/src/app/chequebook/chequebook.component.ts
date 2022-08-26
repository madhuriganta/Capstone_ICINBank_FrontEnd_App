import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../service/user.service';
import { User } from '../registration/registration.component';

export class ChequeBookRequest {
  constructor(
   // public accno:string,
   // public no_of_pages:number,
    public request_status:boolean,
    public user:User
  ){}
}

@Component({
  selector: 'app-chequebook',
  templateUrl: './chequebook.component.html',
  styleUrls: ['./chequebook.component.css']
})

export class ChequebookComponent implements OnInit {
 
 selectedValue: any;
  constructor(private router:Router,private service:UserService,private formBuilder:FormBuilder) { }
 chequeBookRequestForm:FormGroup;  
 account= this.getAccountPassedByParent();
  // primaryAccount=sessionStorage.getItem("primaryAccountNo");
  // savingsAccount= sessionStorage.getItem("savingsAccountNo");
  ngOnInit(): void {
     console.log(this.selectedValue);
     this.chequeBookRequestForm = this.formBuilder.group({
      accountType:[this.account,[Validators.required]]
    })
  }

  onSelect(event){
    this.selectedValue=event.target.value;
  }
  getAccountPassedByParent() {
    return  history.state.data;
  }

 
  onSubmit(){
    let userObj = JSON.parse(sessionStorage.getItem("userObj"));
    this.service.requestChequeBook(new ChequeBookRequest(false,userObj),userObj).subscribe(
      response =>{ 
        alert("Chequebook request submiited")
        console.log(response
          )
          this.router.navigate(['/welcome']);
        },
      error => { 
        alert("Chequebook request failed")
        console.log(error)},
    )
       

  }
  
  // public onChange(event): void {  // event will give you full breif of action
  //   const newVal = event.target.value;
  //   this.accountType=newVal
  //  console.log(newVal);
  // }

 
}

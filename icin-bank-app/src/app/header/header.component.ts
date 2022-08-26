import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//username='';
view:boolean=false;
  constructor(private router:Router,
    public service:UserService) { }
  ngOnInit(): void {
    
  }
  // isView(){
  //   this.view=false;
  // }

  // handleChequeBookRequest(account){
  //  this.router.navigate(["user","chequeBookRequest"],{state:{data:account}}); 
  // }

  // handleTransferFundRequest(account){
  //   this.router.navigate(["user","transferFundRequest"],{state:{data:account}}); 
  // }
  // handleLogout(){
  //   sessionStorage.removeItem("isAuthenticatedUser");
  //   sessionStorage.clear();
  //   this.router.navigate(["login"]);
  // }
  // viewProfile(){
  //   this.router.navigate(["user","profile"]);
  // }

  // handleHome(){
  //   if(this.service.isUserLogin()){
  //     this.router.navigate(["user","home"]);
  //   }
  //   else{
  //     this.router.navigate(["login"]);
  //   }
  // }
  // handleAccount(account){
  //   if(account==="Primary")
  //       this.router.navigate(["user","primaryAccount"])
  //   else
  //     this.router.navigate(["user","savingAccount"])
  // }
  onSubmit(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }


}

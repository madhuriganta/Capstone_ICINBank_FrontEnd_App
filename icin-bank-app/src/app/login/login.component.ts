import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//isLogin:boolean=false;
loginForm:FormGroup;
submitted=false;
 msg='';


  constructor(private service: UserService,private formBuilder:FormBuilder ,private router: Router) { }

  ngOnInit(): void {
    // this.isLogin=false;
    this.loginForm=this.formBuilder.group({
      username:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }  

  // loginUser(){
  //     this._service.loginUserFromRemote(this.user).subscribe(
  //       data =>{
  //         localStorage.setItem('myuser',this.user.username);
  //         console.log("response received");
  //         this._router.navigate(['/welcome'])
  //       },       
  //       error=>{
  //         console.log("exception occured");
  //         this.msg="Bad credentials, Please enter valid username and password";
  //       }
  //     )

  // }
    loginUser(){
      this.submitted=true;
      if (!this.loginForm.invalid) {
           let user =new User(0,this.loginForm.get("username").value,"","","",this.loginForm.get("password").value,null);
          console.log(user);
          this.service.authenticateUser(user).subscribe(
            response => {
              console.log(response),
              sessionStorage.removeItem("password");
              sessionStorage.setItem("userid",response["userid"]);
              sessionStorage.setItem("username",response["username"]);
              sessionStorage.setItem("email",response["email"]);
              sessionStorage.setItem("contact",response["contact"]);
              sessionStorage.setItem("isAuthenticatedUser",response["firstName"]);
              sessionStorage.setItem("lastname",response["lastName"]);
              sessionStorage.setItem("userObj",JSON.stringify(response));
              console.log("Json object is ")
               let u = JSON.parse(sessionStorage.getItem("userObj"));
               console.log(u);
              
              this.router.navigate(['/welcome']);

        },       
        error=>{
          console.log("exception occured");
          this.msg="Bad credentials, Please enter valid username and password";
        }
      )
    }

  }
  get fval(){
    return this.loginForm.controls;
  }
   
}
  function fval() {
    throw new Error('Function not implemented.');
  }


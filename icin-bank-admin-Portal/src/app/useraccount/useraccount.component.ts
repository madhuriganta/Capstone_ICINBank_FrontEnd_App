import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { MatDialog  } from '@angular/material/dialog';
import { PrimaryaccountgenerateComponent } from '../primaryaccountgenerate/primaryaccountgenerate.component';
import { SavingsaccountComponent } from '../savingsaccount/savingsaccount.component';
import { GenerateSavingsAccountComponent } from '../generate-savings-account/generate-savings-account.component';



export class User {
  constructor(
    public userid:number,
    public username:string,
    public firstName: string,
    public lastName: string ,
    public email: string ,
    public password: string,
    public contact: number,
    
    ) {} 
  }
	export class SavingsAccount {
		constructor(
			public id:number,
			public accno:string,
			public balance: number,
			public userid:number
			 ) {} 
	}
	export class PrimaryAccount {
		constructor(
			public id:number,
			public accno:string,
			public balance: number,
			public userid:number
			 ) {} 
	}

class UserAccountDetail {
	constructor(
	 public user:User,
    public primaryAccount?:PrimaryAccount,
    public savingsAccount?:SavingsAccount){}
}
@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css'],
	})
export class UseraccountComponent implements OnInit {

  users:User[]=[];
	savingsAccounts: SavingsAccount[]=[];
	primaryAccounts: PrimaryAccount[]=[];
	userAccountDetails: UserAccountDetail[]=[];
 	constructor(private userService: AdminService, private router: Router,public dialog: MatDialog) {
		this.getAllUsers();
	}

	getAllUsers() {
		this.userService.getAllUsers().subscribe(
			response=> {
            this.users = JSON.parse(JSON.stringify(response));
     				this.getAllPrimaryAccountDetails();
      		},
      		error => console.log(error)
		)
	}

	getAllPrimaryAccountDetails(){
		this.userService.getAllPrimaryAccounts().subscribe(
			response =>{
				this.primaryAccounts = JSON.parse(JSON.stringify(response));
				this.getAllSavingsAccountDetails();
			},
			error => console.log(error)
			)
	}

	getAllSavingsAccountDetails(){
		this.userService.getAllSavingsAccounts().subscribe(
			response =>{
				this.savingsAccounts = JSON.parse(JSON.stringify(response));
				this.getUserAccountDetails();
			}
		)
	}

	getUserAccountDetails(){
		if(this.users.length > 0){
			const details=this.users.map(user => {
			
				const primaryAccount = this.primaryAccounts.find(p =>p.userid == user.userid)
				const savingsAccount = this.savingsAccounts.find(s => s.userid == user.userid )
				return new UserAccountDetail(user,primaryAccount,savingsAccount)
			})
			this.userAccountDetails = details
		}
	}

	openGeneratePAccountDialog(userid:number): void {
		console.log(userid);
    const dialogRef=this.dialog.open(PrimaryaccountgenerateComponent, {
			height: '250px',
			width: '400px',
			data:{
				userId: userid,
			  }		
    });
		
		dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.data = result;
    });
  }
	openGenerateSAccountDialog(userid:number): void {
		console.log(userid);
    const dialogRef=this.dialog.open(GenerateSavingsAccountComponent, {
			height: '250px',
			width: '400px',
			data:{
				userId: userid,
			  }		
    });
		
		dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.data = result;
    });
  }

 


	 onSelectPrimary(userAcc: any) {
    	this.router.navigate(['/primaryTransaction', userAcc]);
  	}	

  	onSelectSavings(userAcc: any) {
    	this.router.navigate(['/savingsTransaction', userAcc]);
  	}	

  	// enableUser(username: string) {
  	// 	//this.userService.enableUser(username).subscribe();
  	// 	location.reload();
  	// }

  	// disableUser(username: string) {
  	// 	this.userService.disableUser(username).subscribe(
		// 	  response => {
		// 		  console.log(response)
		// 	  },
		// 	  error => {
		// 		  console.log(error)
		// 	  }
		//   );
  	// 	location.reload();
  	// }


  ngOnInit() {
  }


}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../service/admin.service';

export class PersonalTransactions {
  constructor(
    public transactionId:number,
    public accno:string,
    public newbalance: number,
    public userid:number,
    public transactionType:number,
    public accType:string,
     ) {} 
}

@Component({
  selector: 'app-savingsaccount',
  templateUrl: './savingsaccount.component.html',
  styleUrls: ['./savingsaccount.component.css']
})

export class SavingsaccountComponent implements OnInit {
  userAcc:string='';
	savingsTransactionList: PersonalTransactions[]=[];

  constructor(private userService:AdminService, private route:ActivatedRoute) { 
    this.route.params.forEach((params: Params) => {
      this.userAcc = params['userAcc'];
 });

 this.getSavingsTransactionList();
  }

  ngOnInit(): void {
  }
  getSavingsTransactionList() {
		this.userService.getSavingsTransactionList(this.userAcc).subscribe(
			res => {
				console.log(JSON.parse(JSON.stringify(res))._body);
        		this.savingsTransactionList = JSON.parse(JSON.stringify(res));
      		},
      		error => console.log(error)
		)
	}


}

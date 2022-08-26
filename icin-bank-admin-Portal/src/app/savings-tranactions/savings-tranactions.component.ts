import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { SavingsAccount } from '../useraccount/useraccount.component';

@Component({
  selector: 'app-savings-tranactions',
  templateUrl: './savings-tranactions.component.html',
  styleUrls: ['./savings-tranactions.component.css']
})
export class SavingsTranactionsComponent implements OnInit {

  userAcc:string='';
	savingsTransactionList: SavingsAccount []=[];

	constructor(private route: ActivatedRoute, private userService: AdminService) {
		this.route.params.forEach((params: Params) => {
     		this.userAcc = params['userAcc'];
		});

		this.getSavingsTransactionList();
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

	ngOnInit() {}
}

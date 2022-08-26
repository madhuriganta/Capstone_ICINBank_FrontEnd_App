import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { PrimaryAccount } from '../useraccount/useraccount.component';

@Component({
  selector: 'app-primary-tranactions',
  templateUrl: './primary-tranactions.component.html',
  styleUrls: ['./primary-tranactions.component.css']
})
export class PrimaryTranactionsComponent implements OnInit {

  userAcc:any;
  primaryAccountList: PrimaryAccount[]=[];

	constructor(private route: ActivatedRoute, private userService: AdminService) {
		this.route.params.forEach((params: Params) => {
     		this.userAcc = params['userAcc'];
		});

		this.getPrimaryTransactionList();
	}

	getPrimaryTransactionList() {
		this.userService.getPrimaryTransactionList(this.userAcc).subscribe(
			res => {
				console.log(JSON.parse(JSON.stringify(res))._body);
        		this.primaryAccountList = JSON.parse(JSON.stringify(res));
      		},
      		error => console.log(error)
		)
	}

	ngOnInit() {}

}

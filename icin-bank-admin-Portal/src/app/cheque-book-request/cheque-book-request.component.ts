import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

import { User } from '../useraccount/useraccount.component';


export class ChequeBookRequest {
  constructor(
    public id:number,
    public accType:string,
    public date: Date ,
    public no_of_pages: number,
    public request_status:boolean,
      ) {} 
  }

  export class CheckbookApproval {
    constructor(
      public id:number,
      public accType:string,
      public date: Date ,
      public no_of_pages: number,
      public request_status:boolean,
      public firstName?: string
        ) {} 
  }
@Component({
  selector: 'app-cheque-book-request',
  templateUrl: './cheque-book-request.component.html',
  styleUrls: ['./cheque-book-request.component.css']
})
export class ChequeBookRequestComponent implements OnInit {


  chequeBookRequestList: ChequeBookRequest[] = [];
  // users:User[]=[];

  checkbookApprovals:CheckbookApproval[] = []

	constructor(private chequeBookRequestService: AdminService) {
		this.getChequeBookRequestList();
    // this.getAllUsers();
	}
  // getAllUsers() {
  //   this.chequeBookRequestService.getAllUsers().subscribe(
	// 		response=> {
  //           this.users = JSON.parse(JSON.stringify(response));
  //           console.log(this.users);
  //     		},
  //     		error => console.log(error)
	// 	)
    
  // }

	getChequeBookRequestList() {
		this.chequeBookRequestService.getChequeBookRequestList().subscribe(
			res => {
				this.chequeBookRequestList = JSON.parse(JSON.stringify(res));
				console.log(this.chequeBookRequestList);
      		},
      		error => console.log(error)
		)
	}	
  confirmChequeBookRequest(id: number) {
    this.chequeBookRequestService.confirmChequeBookRequest(id).subscribe();
    location.reload();
  }

  // combine() {
  //   if(this.users.length > 0) {
  //   const combined = this.chequeBookRequestList.map(request => {
  //     const firstName = this.users.find(u => u.userid == request.id)?.firstName
  //       new CheckbookApproval(request.id,request.accType,request.date,request.no_of_pages,
  //         request.request_status,firstName)
  //     })
  //   }
  // }



ngOnInit() {}

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../service/admin.service';
import { PrimaryAccount } from '../useraccount/useraccount.component';

@Component({
  selector: 'app-primaryaccountgenerate',
  templateUrl: './primaryaccountgenerate.component.html',
  styleUrls: ['./primaryaccountgenerate.component.css']
})
export class PrimaryaccountgenerateComponent implements OnInit {

  primaryAccount: PrimaryAccount [] =[];
  balance:number=0;

  constructor(@Inject(MAT_DIALOG_DATA) public data:{userId:number},
  public dialogRef: MatDialogRef<PrimaryaccountgenerateComponent>,private service:AdminService) { }
  ngOnInit(): void {
    console.log("input "+this.data.userId);
    
  }
  generatePrimaryAccount(userId:number): void {

    const accNo = "PR-"+ getRandomArbitrary(1000000,90000000)
    console.log("userId "+ this.data.userId)
    const account = new PrimaryAccount(0,accNo,this.balance,userId)

    this.service.createPrimaryAccount(account).subscribe(res => {
      if(res){
        console.log("AccountCreated");
      }
      (error: any) =>{ 
        console.log(error);
       
      }
    })

  }

  onNoClick(){}

}

function getRandomArbitrary(min:number, max:number) {
  return Math.random() * (max - min) + min;
}




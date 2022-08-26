import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../service/admin.service';
import { SavingsAccount } from '../useraccount/useraccount.component';

@Component({
  selector: 'app-generate-savings-account',
  templateUrl: './generate-savings-account.component.html',
  styleUrls: ['./generate-savings-account.component.css']
})
export class GenerateSavingsAccountComponent implements OnInit {
 savingsAccount: SavingsAccount[]=[];
 balance:number=0;

  constructor(@Inject(MAT_DIALOG_DATA) public data:{userId:number},
  public dialogRef: MatDialogRef<GenerateSavingsAccountComponent>,private service:AdminService) { }

  ngOnInit(): void {
    console.log("input "+this.data.userId);
  }

  generateSavingsAccount(userId:number): void {

    const accNo = "SA-"+ getRandomArbitrary(1000000,90000000)
    console.log("userId "+ this.data.userId)
    const account = new SavingsAccount(0,accNo,this.balance,userId)

    this.service.createSavingsAccount(account).subscribe(res => {
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


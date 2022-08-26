import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

export class Deposit {
  constructor(private accType:String,private accno:number,private amount: number){}
}
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private router:Router,private formBuilder:FormBuilder,private service:UserService) { }
  account:string="";
  balanceFund:number;
  depositMoneyForm: FormGroup;
  submitted:boolean = false;
  
  sAccountNo = sessionStorage.getItem("savingsAccountNo");
  sAccountBalance=sessionStorage.getItem("savingsAccountBalance");
  pAccountNo = sessionStorage.getItem("primaryAccountNo");
  pAccountBalance=sessionStorage.getItem("primaryAccountBalance")

  
  ngOnInit(): void {

    this.depositMoneyForm = this.formBuilder.group({
      accountType: ["Primary Account"],
      balance : [this.balanceFund],
      amountToBeDeposited : ["",Validators.required]
      })
    console.log("balance"+this.balanceFund);

    this.getBalanceAsPerAccountType(this.depositMoneyForm.get("accountType").value);
  }

  getBalanceAsPerAccountType(accountType: string){
    if(accountType==="Primary Account")
      this.getBalance(this.pAccountNo);
    else
      this.balanceFund = Number(this.sAccountBalance);
  }

  get fval(){
    return this.depositMoneyForm.controls;
  }

  getBalance(account){
    this.service.getAccountBalance(account).subscribe(
      response => {
        this.balanceFund = Number(response);
      },
      error =>{
        console.log(error);
      }
    )
  }

  handleTransferFund(){
    this.submitted = true;
    if(this.depositMoneyForm.invalid){
      console.log("Invalid")
    }
    else{
    if(Number(this.depositMoneyForm.get("amountToBeDeposited").value)>0){
      if(this.depositMoneyForm.get("accountType").value === "Primary Account"){
        this.service.depositMoney("Primary",this.pAccountNo,Number(this.depositMoneyForm.get("amountToBeDeposited").value)).subscribe(
          response =>{ 
            console.log(response)
            let updatedBalance = Number(this.depositMoneyForm.get("amountToBeDeposited").value) + Number(this.pAccountBalance)
            sessionStorage.setItem("AccountBalance",String(updatedBalance));

            alert("Money deposited successfully!!")
            this.router.navigate(['/welcome']);
            },
          error => {
            alert("Transaction Failed")
            console.log(error)
          }
        )
        }
        else{
          this.service.depositMoney("Savings",this.sAccountNo,Number(this.depositMoneyForm.get("amountToBeDeposited").value)).subscribe(
            response =>{ 
              console.log(response)
              let updatedBalance = Number(this.depositMoneyForm.get("amountToBeDeposited").value) + Number(this.sAccountBalance)
              sessionStorage.setItem("savingsAccountBalance",String(updatedBalance));
              alert("Money deposited successfully!!")
              this.router.navigate(["user","welcome"]);
              },
            error => {
              alert("Transaction Failed")
              console.log(error)
            }
          )
        }

    }
    else{
      alert("Amount to be deposited cannot be negative")
    }
    
  }
}

  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.getBalanceAsPerAccountType(newVal);
   // console.log(newVal);
  }

 

}



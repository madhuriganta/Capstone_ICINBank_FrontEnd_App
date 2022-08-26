import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrimaryAccount, SavingsAccount, User } from '../useraccount/useraccount.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url="http://localhost:8080";
  constructor (private http:HttpClient){}

  getChequeBookRequestList() {
    return this.http.get(this.url+'/allcheques');

  }

  confirmChequeBookRequest(id: number) {
     return this.http.get(this.url+'/admin/confirmchequetrue'+id);
  }
 
  createPrimaryAccount(account:PrimaryAccount){
  
    return this.http.post(this.url+'/creatPrimaryAccount',account);

  }
  createSavingsAccount(account:SavingsAccount){

      return this.http.post(this.url+'/creatSavingsAccount',account);

  }
  
  getAllUsers() {
       return this.http.get(this.url+'/getAllUsers');
  }
  getAllPrimaryAccounts(){
    return this.http.get(this.url+'/getAllPrimaryAccounts');
  }
  getAllSavingsAccounts(){
    return this.http.get(this.url+'/getAllSavingsAccount');
  }

   getPrimaryTransactionList(userAcc: any) {
        return this.http.get(this.url+'/admin/transactions/'+userAcc);
   }

   getSavingsTransactionList(userAcc: any) {
      return this.http.get(this.url+'/admin/transactions/'+userAcc);
   }




}

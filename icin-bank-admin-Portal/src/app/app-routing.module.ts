import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChequeBookRequestComponent } from './cheque-book-request/cheque-book-request.component';
import { LoginComponent } from './login/login.component';
import { PrimaryTranactionsComponent } from './primary-tranactions/primary-tranactions.component';
import { SavingsTranactionsComponent } from './savings-tranactions/savings-tranactions.component';
import { UseraccountComponent } from './useraccount/useraccount.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {	path: 'login',component: LoginComponent },
  { path: 'userAccount',component: UseraccountComponent },
  { path: 'primaryTransaction/:username',component: PrimaryTranactionsComponent },
  { path: 'savingsTransaction',component: SavingsTranactionsComponent },
  { path: 'chequeBookRequest',component: ChequeBookRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

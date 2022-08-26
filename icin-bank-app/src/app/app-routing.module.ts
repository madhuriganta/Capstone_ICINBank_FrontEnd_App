import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChequebookComponent } from './chequebook/chequebook.component';
import { DepositComponent } from './deposit/deposit.component';
import { PrimaryAccountComponent } from './primary-account/primary-account.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SavingsaccountComponent } from './savingsaccount/savingsaccount.component';
import { AuthGuardService } from './service/auth-guard.service';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'login', component:LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'chequebookrequest', component:ChequebookComponent },
  { path: 'deposit', component:DepositComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'withdraw', component:WithdrawComponent,canActivate:[AuthGuardService] },
  { path: 'primaryAccount', component:PrimaryAccountComponent,canActivate:[AuthGuardService] },
  { path: 'savingsAccount', component: SavingsaccountComponent,canActivate:[AuthGuardService]},
  { path: 'transactionHistory', component:TransactionHistoryComponent,canActivate:[AuthGuardService] },
  { path: 'editProfile', component:ProfileEditComponent,canActivate:[AuthGuardService] },
  { path: 'transferHistory', component:TransferHistoryComponent,canActivate:[AuthGuardService] },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

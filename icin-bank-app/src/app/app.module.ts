import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { ChequebookComponent } from './chequebook/chequebook.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PrimaryAccountComponent } from './primary-account/primary-account.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SavingsaccountComponent } from './savingsaccount/savingsaccount.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    LoginComponent,
    RegistrationComponent,
  
    ChequebookComponent,
    DepositComponent,
    WithdrawComponent,
    PrimaryAccountComponent,

    TransactionHistoryComponent,
    ProfileEditComponent,
    SavingsaccountComponent,
    
    TransferHistoryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

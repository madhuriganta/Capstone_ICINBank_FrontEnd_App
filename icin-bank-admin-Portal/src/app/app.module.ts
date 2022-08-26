import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrimaryTranactionsComponent } from './primary-tranactions/primary-tranactions.component';
import { SavingsTranactionsComponent } from './savings-tranactions/savings-tranactions.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { ChequeBookRequestComponent } from './cheque-book-request/cheque-book-request.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginService } from './service/login.service';
import { SavingsaccountComponent } from './savingsaccount/savingsaccount.component';
import { PrimaryaccountComponent } from './primaryaccount/primaryaccount.component';
import { MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenerateSavingsAccountComponent } from './generate-savings-account/generate-savings-account.component';
import { PrimaryaccountgenerateComponent } from './primaryaccountgenerate/primaryaccountgenerate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrimaryTranactionsComponent,
    SavingsTranactionsComponent,
    UseraccountComponent,
    ChequeBookRequestComponent,
    NavbarComponent,
    SavingsaccountComponent,
    PrimaryaccountComponent,
   GenerateSavingsAccountComponent,
   PrimaryaccountgenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
     ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

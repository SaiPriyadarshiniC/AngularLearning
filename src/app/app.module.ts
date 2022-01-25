import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TxnSummarySectionComponent } from './txn-summary-section/txn-summary-section.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TxnFormRowComponent } from './txn-form-row/txn-form-row.component';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';
@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    TxnSummarySectionComponent,
    TxnFormRowComponent,
    TransactionRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

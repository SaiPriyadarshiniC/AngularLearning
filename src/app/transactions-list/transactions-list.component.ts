import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TxnSummary } from '../models/txn-summary';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  txns?:Transaction[];
  txnSmry?:TxnSummary;
  errMsg?:string;

  constructor(private txnService:TransactionService) {
    
  }
  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.txnService.getAll().subscribe(
      txns => {this.txns = txns; this.txnSmry = this.txnService.getSummary(txns)},
      err => {console.log(err); this.errMsg="Unable to fetch data! Please try a little later!"});
    
  }

  deleteTxn(id:number){
    this.errMsg = undefined;
    this.txnService.delete(id).subscribe(
      txns => this.loadData(),
      err => {console.log(err); this.errMsg="Unable to delete data! Please try a little later!"}
    );
    
  }

  addTxn(txn:Transaction){
    this.errMsg = undefined;

    this.txnService.add(txn).subscribe(
    txn => this.loadData(),
    err => {console.log(err); this.errMsg="Unable to add data! Please try a little later!"}
    );
  }

  editTxn(id:number){
    this.txns = this.txns?.map(t => t.id!==id?t:{...t,isEditable:true});
  }

  cancelEditTxn(id:number){
    this.txns = this.txns?.map(t => t.id!==id?t:{...t,isEditable:undefined});
  }

  updateTxn(txn:Transaction){
    let t = {...txn,isEditable:undefined};
    this.txnService.update(t);
    this.loadData();
  }

}
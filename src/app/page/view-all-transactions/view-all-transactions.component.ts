import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-view-all-transactions',
    standalone: true,
    templateUrl: './view-all-transactions.component.html',
    styleUrl: './view-all-transactions.component.css',
    imports: [NavbarComponent, HttpClientModule, FormsModule, CommonModule]
})
export class ViewAllTransactionsComponent implements OnInit {

    public allTransactions:any = [];

    constructor(private http:HttpClient){}
    
    ngOnInit(): void {
      
        this.loadTransactions();
    }

    loadTransactions(){

        this.http.get("http://localhost:8080/borrow-books/get-all").subscribe( responce => {

                console.log(responce);
                this.allTransactions = responce;
                
        })

    }
}

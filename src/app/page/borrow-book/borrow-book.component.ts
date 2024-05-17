import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-borrow-book',
    standalone: true,
    templateUrl: './borrow-book.component.html',
    styleUrl: './borrow-book.component.css',
    imports: [NavbarComponent, HttpClientModule, FormsModule, CommonModule]
})
export class BorrowBookComponent {

    public user: any;
    public userName: String = "";
    public bookId: any;
    public searchBookRes: any;

    constructor(private http: HttpClient){}

   

    public cartList:any=[]

    searchUser() {

        this.http.get(`http://localhost:8080/user/find-by-user-name/${this.userName}`).subscribe(data => {

            console.log(data);
            this.user = data;

        })

    }

    searchBook() {

        this.http.get(`http://localhost:8080/book/search/${this.bookId}`).subscribe(data => {

            console.log(data);
            this.searchBookRes = data;

            Swal.fire({
                title: `" ${this.searchBookRes.title} " Do You Want To Get This Book?`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `Don't `
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                    this.cartList.push(this.searchBookRes);
                    this.searchBookRes={};
                    console.log(this.cartList);
                    
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });



        })

    }

   bookIds:any=[];

   loadBookIds(){

        this.cartList.forEach((element:any) => {
            
            this.bookIds.push(element.id);
        });
   }
   
    borrowBook(){
        console.log("Working Me Click");

        this.loadBookIds();

        const borrowBookObj: any = {

            borrowId:this.user.id,
            bookId:this.bookIds,
            date: new Date(),
            fine: null
           
        }

        console.log(borrowBookObj);

        this.http.post("http://localhost:8080/borrow-books/add-borrow-details",borrowBookObj).subscribe( responce => {

            console.log(responce);
            Swal.fire({
                title: "Successful !",
                text: `User " ${this.userName} "Borrow Has Been Successfully ! `,
                icon: "success"
              });
            
        })
        
        
    }

}

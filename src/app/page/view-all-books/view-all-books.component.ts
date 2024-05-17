import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NavbarComponent } from "../../common/navbar/navbar.component";


@Component({
    selector: 'app-view-all-books',
    standalone: true,
    templateUrl: './view-all-books.component.html',
    styleUrl: './view-all-books.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, NavbarComponent]
})
export class ViewAllBooksComponent implements OnInit {

  private http;
  public bookList:any={};
  public selectedBook : any;
  

  constructor(private httpCliant:HttpClient){

    this.http=httpCliant;

  }
  ngOnInit(): void {
    
    this.loadBooks();
  }
  loadBooks() {
    
    this.http.get('http://localhost:8080/book/getBooks').subscribe((data)=>{
    this.bookList = data;

    console.log(this.bookList);
    })
  }

  deleteBook(){

    let api = "http://localhost:8080/book/"+this.selectedBook.id;
    
    this.http.delete(api,{responseType:'text'}).subscribe((responce:string)=>{
    this.loadBooks();
    Swal.fire({
      title: "Deleted!",
      text: `Your${this.selectedBook.title} Book Has Been Successfully Deleted `,
      icon: "success"
    });
    this.selectedBook=null;
    
    
    })

    // this.http.delete(`http://localhost:8080/book/${this.selectedBook.id}`).subscribe(data=>{

    // this.loadBooks();
    
    // })
   
  }

  setSelectedBook(Book : any){

    this.selectedBook=Book;
    console.log(Book);
    
  }

  saveBook(){

    let postApi = "http://localhost:8080/book/add";
    this.http.post(postApi,this.selectedBook).subscribe(data=>{

      this.loadBooks();
      Swal.fire({
        title: "Updated!",
        text: `Your${this.selectedBook.title} Book Has Been Successfully Updated `,
        icon: "success"
      });
      this.selectedBook = null;

    })
  }
}

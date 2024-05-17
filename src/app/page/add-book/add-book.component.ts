import { Component } from '@angular/core';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  standalone: true,
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
  imports: [NavbarComponent, HttpClientModule, FormsModule, CommonModule]
})
export class AddBookComponent {

constructor(private http:HttpClient){}

  public bookObj: any = {

    isbn: null,
    title: null,
    author: null,
    category: null,
    quantity: null
  }

  addBook() {
    console.log(this.bookObj);
    this.http.post("http://localhost:8080/book/add",this.bookObj).subscribe(data => {

        console.log("addbook");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${this.bookObj.title} Book has been saved`,
          showConfirmButton: false,
          timer: 1500
        });
        
    })
  }
}

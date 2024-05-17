import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any={

      "email":null,
      "password":null
  }

  constructor(private http:HttpClient,private router:Router){}

  login(){

    this.http.post("http://localhost:8080/login/request-login",this.loginObj).subscribe((responce:any) => {

                console.log(responce);
          if(responce == true){
            Swal.fire({
              title: "Success !",
              text: " User Login Has Been Successfully ",
              icon: "success"
            });
            this.router.navigate(['/view-all-books'])
          }else{
           
            Swal.fire({
              title: " Warning !",
              text: " Invalid User Name Or Password " ,
              icon: "error"
            });
          }

    })

  }
}

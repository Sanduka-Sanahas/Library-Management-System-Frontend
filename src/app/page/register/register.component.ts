import { routes } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  private http;
  public countryList: any;
  public selectedCountry: any;
  public isExistUser: any;
  public selectedCountryCode: any;
  public userObj = {

    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    address: null,
    address2: null,
    country: null,
    phoneNumber: null
  }

  constructor(private httpClient: HttpClient, public routes: Router) {

    this.http = httpClient;

  }

  ngOnInit(): void {

    this.loadCountries();
  }
  loadCountries() {

    let api = "https://restcountries.com/v3.1/all"

    this.http.get(api).subscribe(responce => {

      this.countryList = responce;
      console.log(responce);
    });
  }

  setSelectedCountry(country: any,countryName:any) {

    this.selectedCountry = country;
    this.selectedCountryCode = country.idd.root+""+country.idd.suffixes[0]+" ";
    this.userObj.country=countryName;
    console.log(this.selectedCountry);
    console.log(country);
    
   

  }

  submitForm() {
    
      this.http.get(`http://localhost:8080/user/is-exist-user/${this.userObj.userName}`).subscribe( data =>{

      this.isExistUser=data;
      this.registerUser(this.isExistUser);
      
      

      })
  }

  registerUser(isExistUser:any){

    if(!isExistUser==true){

        this.http.post("http://localhost:8080/user/add-user",this.userObj).subscribe( data =>{
         
        Swal.fire({
            title: "Success !",
            text: ` ${this.userObj.userName}  Has Been Successfully Registed `,
            icon: "success"
          });

          this.routes.navigate(['/login']);

        })
    }else{

      Swal.fire({
        title: "Can't Register This User !",
        text: ` Your User Name " ${this.userObj.userName} " Has Been Already Registed `,
        icon: "error"
      });
    }

  }


}

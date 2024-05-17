import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-view-all-users',
    standalone: true,
    templateUrl: './view-all-users.component.html',
    styleUrl: './view-all-users.component.css',
    imports: [NavbarComponent, HttpClientModule, FormsModule, CommonModule]
})
export class ViewAllUsersComponent implements OnInit {


    public userList: any;
    private baseURL:string="http://localhost:8080"
    public selectedUser: any = {
        
        "id":null,
        "firstName": null,
        "lastName": null,
        "userName": null,
        "email": null,
        "address": null,
        "address2": null,
        "country": null,
        "phoneNumber": null
    }

    constructor(private http: HttpClient) { }
    ngOnInit(): void {

        this.loadUsers();
    }
    loadUsers() {

        this.http.get(this.baseURL+"/user/get-all-users").subscribe((response: any) => {

            console.log(response);
            this.userList = response;

        })
    }

    deleteUser() {

        this.http.delete(this.baseURL+"/user/delete-user/"+this.selectedUser.id,{responseType:'text'}).subscribe((response:string) =>{

            console.log(response);
            this.loadUsers();
            Swal.fire({
                title: "Deleted!",
                text: `Your${this.selectedUser.userName} User Has Been Successfully Deleted `,
                icon: "success"
              });

        })
    }

    saveUser() {

        this.http.post(this.baseURL+"/user/add-user",this.selectedUser).subscribe((response:any) =>{

            this.loadUsers();

            Swal.fire({
                title: "Updated!",
                text: `Your ${this.selectedUser.userName} User Has Been Successfully Updated !`,
                icon: "success"
              });
        })
    }

    setSelectedUser(user:any){

        this.selectedUser = user;
        console.log(user);

    }
}

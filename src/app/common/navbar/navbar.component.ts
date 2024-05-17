import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

constructor(private router:Router){}
  
signOut(){

  let timerInterval:any;
  let timer:any="";
  Swal.fire({
    title: "Auto logout alert!",
    icon:"warning",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
       timer= Swal.getPopup()?.querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was logout by the timer");
      this.router.navigate(['/login']);
    }
  });
  }


}

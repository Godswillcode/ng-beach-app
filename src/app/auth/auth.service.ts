import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {

  }
   loggedIn() {
     return !!localStorage.getItem('token')
   }

   logout() {
     localStorage.removeItem('token')
    this.route.navigate(['/login'])
   }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  isLoading = false

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.isLoading = true;
    this.http
      .post<any>('https://laravel-api123.herokuapp.com/api/login', this.loginForm.value)
      .subscribe(
        (res) => {
          Swal.fire('Thank you...', 'Successful!!', 'success');
          localStorage.setItem("token", res.access_token)
          this.loginForm.reset();
          this.router.navigate(['beaches']);
          this.isLoading = false
        },
        (err) => {
          Swal.fire('Error occurred!', err.error.message, 'error');
          this.loginForm.reset();
          this.isLoading = false
        }
      );
  }
}

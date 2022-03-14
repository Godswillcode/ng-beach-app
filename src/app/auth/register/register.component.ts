import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public signupForm: FormGroup;
  isLoading = false
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp() {
    this.isLoading = true
    this.http
      .post<any>('https://laravel-api123.herokuapp.com/api/register', this.signupForm.value)
      .subscribe(
        (res) => {
          Swal.fire('Thank you...', 'Successful!!', 'success');
          this.signupForm.reset();
          this.router.navigate(['beaches']);
           localStorage.setItem("token", res)
            this.isLoading = false
        },
        (err) => {
          Swal.fire('Error occurred!', err.error.message, 'error');
          this.signupForm.reset();
          this.isLoading = false
        }
      );
  }
}

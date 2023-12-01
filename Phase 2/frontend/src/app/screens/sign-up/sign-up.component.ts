import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { SignUpResponseBody } from 'src/app/models/signup.response.body';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {}

  email: string = '';
  name: string = '';
  password: string = '';
  type = 'doctor';
  types = [
    { id: '1', value: 'doctor' },
    { id: '2', value: 'patient' },
  ];
  navToSignIn() {
    this.router.navigateByUrl('/login');
  }

  signUp() {
    if (this.email.trim().length === 0) {
      alert('Username is required');
    } else if (this.password.trim().length === 0) {
      alert('Password is required');
    } else if (this.name.trim().length === 0) {
      alert('Name is required');
    } else {
      this.http
        .post<SignUpResponseBody>(
          UsersService.url + UsersService.signupEndPoint,
          {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.type,
          }
        )
        .subscribe(
          (data) => {
            if (data != null) {
              this.router.navigateByUrl('/login');
            }
          },
          (error: HttpErrorResponse) => {
            if (error != null) {
              // make sure if its fine
              alert('Email Already Exists,Please Try Another One');
            }
            console.log(error.error);
          }
        );
    }
  }
}

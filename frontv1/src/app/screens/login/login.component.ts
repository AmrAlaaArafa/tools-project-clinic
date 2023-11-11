import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from '../doctor/doctor.component';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Responses} from "../../models/responses";
import {LogInResponse} from "../../models/log-in-response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private http:HttpClient) {}
   ngOnInit(): void {}
   email : string = '';
   password : string = '';

  login() {
      this.router.navigateByUrl('/doctor');
    if (this.email.trim().length === 0) {
       alert('Username is required');
    } else if (this.password.trim().length === 0) {
      alert('Password is required');
    } else {
        let body = {
            email: this.email,
            password:this.password
        }
        //https://clinic-7nhn.onrender.com/user/signup
        //{
        //   message?: string
        //     token?: string
        //     role?: string
        // }
        this.http.post<LogInResponse>("https://dummyjson.com/http/200",body).subscribe((data)=>{
            //IF SIGNED UP SUCCESSFULLY
            if (data["role"] == "Doctor"){
                if (data["role"]=="Doctor"){
                    this.router.navigateByUrl('/doctor');
                    localStorage.setItem('doctorToken',data["token"])
                }else {
                    this.router.navigateByUrl('/patient');
                    localStorage.setItem('patientToken',data["token"])
                }
            }
        },(error: HttpErrorResponse)=>{
            if(error!=null){
                alert('Wrong email or password');
            }
        })
    }
}
}

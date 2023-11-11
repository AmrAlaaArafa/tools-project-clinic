import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from '../doctor/doctor.component';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Responses} from "../../models/responses";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router, private http:HttpClient) {}
  ngOnInit(): void {}


  email : string = '';
  name : string = '';
  password : string = '';
  type = 'Doctor' ;
  types = [
    {id: '1', value: 'Doctor'},
    {id: '2', value: 'Patient'}
  ]
  signUp() {
    if (this.email.trim().length === 0) {
       alert('Username is required');
    } else if (this.password.trim().length === 0) {
      alert('Password is required');
    }else if (this.name.trim().length === 0) {
      alert('Name is required');
    }else {
      let body = {
        name: this.name,
        email: this.email,
        password:this.password,
        role: this.type
      }
      //https://clinic-7nhn.onrender.com/user/signup
      //{
      //   "status": "200",
      //   "message": "OK"
      // }
      this.http.post<Responses>("https://dummyjson.com/http/200",body).subscribe((data)=>{
        //IF SIGNED UP SUCCESSFULLY
        if (data["status"] == 200){
          alert("Successfully registered");
          this.router.navigateByUrl('/login');
        }
      },(error: HttpErrorResponse)=>{
        if(error!=null){
          alert('Email already exists');
        }
      })
  }
}
}

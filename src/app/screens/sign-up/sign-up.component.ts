import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from '../doctor/doctor.component';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { SignUpResponseBody } from 'src/app/models/signup.response.body';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router,private http:HttpClient) {}
  ngOnInit(): void {}
  
  
  email : string = '';
  name : string = '';
  password : string = '';
  type = 'doctor' ;
  types = [
    {id: '1', value: 'doctor'},
    {id: '2', value: 'patient'}
  ]
  
  
  signUp() {
    if (this.email.trim().length === 0) {
       alert('Username is required');
    } else if (this.password.trim().length === 0) {
      alert('Password is required');
    }else if (this.name.trim().length === 0) {
      alert('Name is required');
    }else {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      
      this.http.post<SignUpResponseBody>(UsersService.url+ UsersService.signupEndPoint,{
        "name":this.name,
        "email":this.email,
        "password":this.password,
        "role":this.type
      }).subscribe((data)=>{
        if (data!=null){
          this.router.navigateByUrl('/login');
        }

       // if condition to check if the data is scuess do smth
        console.log(data);
      },(error:HttpErrorResponse)=>{
          if(error!=null){
            // make sure if its fine
            alert('Email Already Exists,Please Try Another One')
          }
        console.log(error.error);
      })
      
    // alert(`${this.username} ${this.password} ${this.type}`);
      // this.router.navigateByUrl('/doctor')
    //   //TODO: Check API HERE FOR LOG IN INFO 200 MEANS TRUE 403 MEANS FALSE 
    //   let res = this.auth.login(this.username, this.password);
    //   //TODO: IF 200 GO TO THE USER SCREEN
    //   this.router.navigate([DoctorComponent]);
    //   if (res === 200) {
    //     this.router.navigate(['home']);
    //   }
    //   //TODO: IF 403 PRINT Invalid Credentials
    //   if (res === 403) {
    //     this.errorMsg = "Invalid Credentials";
    //   }
    // }
  }
}

}

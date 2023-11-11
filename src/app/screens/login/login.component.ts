import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DoctorComponent } from '../doctor/doctor.component';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { LoginResponseBody } from 'src/app/models/login.response.body';
import { catchError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router,private http:HttpClient) {}
  ngOnInit(): void {}


   email : string = '';
   password : string = '';
    // if i deploy on server need to do async and await like flutter
  login () {
    if (this.email.trim().length === 0) {
       alert('Email is required');
    } else if (this.password.trim().length === 0) {
      alert('Password is required');
    } else {
      this.http.post<LoginResponseBody>(UsersService.url+UsersService.loginEndPoint,
        {
          "email":this.email,
          "password":this.password
        }).subscribe((data)=>{
          console.log(data)
         
          
           if(data!=null && data.role=="doctor"){
            this.router.navigateByUrl('/doctor');
            localStorage.setItem('doctorId',`${data.id}`);
            localStorage.setItem('doctorName',`${data.name}`);

           }else{
            this.router.navigateByUrl('/patient');
            localStorage.setItem('patientId',`${data.id}`);
            localStorage.setItem('patientName',`${data.name}`);

           }
          
         
        },(error:HttpErrorResponse)=>{
          if(error!=null){
            alert('Something Went Wrong');
          }
              console.log(error.error);
        }
        );
        
    // alert(`${this.email} ${this.password}`);
    //   this.router.navigateByUrl('/doctor');
    //   //TODO: Check API HERE FOR LOG IN INFO
    //   let res = this.auth.login(this.email, this.password);
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

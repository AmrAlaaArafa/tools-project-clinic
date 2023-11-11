import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UsersService} from "../../services/users.service";
import {jwtDecode} from "jwt-decode";
import {DoctorToken} from "../../models/doctor-token";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  token : string = '';
  dtToken: string = '';
  docName: string = 'mohammed';
  date: string = "2023-11-30";
  time: string = "10:00";
  title = 'blog';
  tokenInfo= new DoctorToken;
  constructor(private router: Router, private http:HttpClient){
  }
  //{
  //  doctor name: doctor name
  //  role: doctor role
  //
  // }
  ngOnInit(): void {
    // @ts-ignore

    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW1yIGFsYWEiLCJyb2xlIjoiRG9jdG9yIn0.o5AT6RqqIlMnvKW537mdERde_RXN7rfUeoTp7VBPxr0"
    //this.tokenInfo = localStorage.getItem("doctorToken");
    this.tokenInfo = this.getDecodedAccessToken(this.token);
    this.docName = this.tokenInfo.name
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch(Error) {
      return null;
    }
  }


  addSlot(){
    alert(`${this.date} and ${this.time}`)

  }
  checkNotification(){
    this.router.navigateByUrl('/notifications');
  }
  signInForm(){
    localStorage.removeItem("doctorToken");
    this.router.navigateByUrl('/login');
  }
}

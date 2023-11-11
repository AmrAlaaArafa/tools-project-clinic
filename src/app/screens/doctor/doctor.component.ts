import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {UsersService} from "../../services/users.service";
import { jwtDecode } from 'jwt-decode';
import { GetDoctorSlotsResponseBody ,GetDoctorSlotsResponseBodyModel} from 'src/app/models/getdoctorslots.response.body';
import { GetDoctorsResponseBody } from 'src/app/models/getdoctors.response.body';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  // doctor name
  // role
  //
  
  constructor(private router: Router, private http:HttpClient){

  }
  ngOnInit(): void {
    //@ts-ignore
    //could cause some problems
    this.id=localStorage.getItem('doctorId');
    var num :number= +(this.id); 
    this.doctorId=num;
    this.getDoctorSlots();

    this.doctorName=localStorage.getItem('doctorName');

    
  }

  slots : Array<GetDoctorSlotsResponseBodyModel> = [
    {
      date: "N/A",
    hour:"N/A"
    }
  ];
  doctorName:any="";
  date: string = "2023-11-30";
  time: string = "10:00";
  title = 'blog';
  id:string="";
  doctorId:Number=0;
  body1:any;
 



  // const headers = new Headers({
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${this.auth_token}`,
  // });
  // return this.http.post(apiUrl, { headers: headers });
  

  addSlot(){
    this.postMethod1();
    // alert(`${this.date} and ${this.time}`)
    //i will send (date,time,dr id)
    // console.log(`${this.doctorId}`);

  }
     postMethod1(){
      this.http.post(UsersService.url+UsersService.addslotEndPoint,{
      "doctorId":this.doctorId,
      "date":this.date,
      "hour":this.time   
      }).subscribe((data)=>{
        alert("appointment added successfully!")
        console.log(data)
        if(data!=null){
          alert(`${this.date} and ${this.time}`)
          this.getDoctorSlots();
        }
      },(error:HttpErrorResponse)=>{
        if(error!=null){
          alert("this doctor already has an appointment at this time!")
        }});
    }
    getDoctorSlots(){
      this.http.post<GetDoctorSlotsResponseBody[]>(UsersService.url+UsersService.getDoctorSlots,{
      "doctorId":this.doctorId
  
      }).subscribe((data)=>{

        console.log(data)
        if(data!=null){
          this.slots=data;
        }

      },(error:HttpErrorResponse)=>{
        if(error!=null){
        }
            
      });
    }
    getDoctors(){
      let body ={
        "doctorId" : this.doctorId
      }
      this.http.post<GetDoctorsResponseBody[]>(UsersService.url+UsersService.getDoctorSlots , body).subscribe((data)=>{
          if(data!=null){
            //show list of doctors
          }
        });

    }
  
    checkNotification(){
      this.router.navigateByUrl('/notifications');
    }
  
    signInForm(){
      this.router.navigateByUrl('/login');
    }
    editpt(k:string) {
      alert(`Edit ${k}`);
    }
  
    cancelpt(k:string) {
      alert(`Cancel ${k}`);
    }
  }
  
 
   
 





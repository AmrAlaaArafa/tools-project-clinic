import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../../services/users.service';
import {
  GetDoctorSlotsResponseBody,
  GetDoctorSlotsResponseBodyModel,
} from 'src/app/models/getdoctorslots.response.body';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    //@ts-ignore
    //could cause some problems
    this.id = localStorage.getItem('doctorId');
    var num: number = +this.id;
    this.doctorId = num;
    this.getDoctorSlots();
    this.doctorName = localStorage.getItem('doctorName');
  }

  slots: Array<GetDoctorSlotsResponseBodyModel> = [];
  doctorName: any = '';
  date: string = '2023-11-30';
  time: string = '10:00';
  title = 'blog';
  id: string = '';
  doctorId: Number = 0;
  body1: any;

  addSlot() {
    this.http
      .post(UsersService.url + UsersService.addslotEndPoint, {
        doctorId: this.doctorId,
        date: this.date,
        hour: this.time,
      })
      .subscribe(
        (data) => {
          alert('appointment added successfully!');
          console.log(data);
          if (data != null) {
            alert(`${this.date} and ${this.time}`);
            this.getDoctorSlots();
          }
        },
        (error: HttpErrorResponse) => {
          if (error != null) {
            alert('this doctor already has an appointment at this time!');
          }
        }
      );
  }

  getDoctorSlots() {
    this.http
      .post<GetDoctorSlotsResponseBody[]>(
        UsersService.url + UsersService.getDoctorSlots,
        {
          doctorId: this.doctorId,
        }
      )
      .subscribe(
        (data) => {
          console.log(data);
          if (data != null) {
            this.slots = data;
          }
        },
        (error: HttpErrorResponse) => {
          if (error != null) {
          }
        }
      );
  }

  signInForm() {
    this.router.navigateByUrl('/login');
  }
}

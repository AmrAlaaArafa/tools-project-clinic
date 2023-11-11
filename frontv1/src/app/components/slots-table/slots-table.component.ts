import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestModel, Testy} from "../../models/testy";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-slots-table',
  templateUrl: './slots-table.component.html',
  styleUrls: ['./slots-table.component.css']
})
export class SlotsTableComponent implements OnInit {
  slots : Array<TestModel> = [];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getSlotData();
  }
  //{
  //  aDate:
  //  bTime:
  //  cDoctor:
  //  dId:
  // }
  getSlotData(){
    //{
    //   ???????????????????????????????????
    // }
    let body = {
      authentication : localStorage.getItem('doctorToken')
    }
    //TODO: GET DOCTOR SLOTS API
    this.http.get<Testy[]>("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>{
      this.slots = data;
      console.log(this.slots)

    },(error: HttpErrorResponse)=>{
      if(error!=null){
        alert('Wrong email or password');
      }
    })
  }


  // slots = [
  //   { Id: 'one', Date: '10/11/2023', Hour: '1:00 PM' },
  //   { Id: 'two', Date: '15/03/2023', Hour: '5:00 PM' },
  //   { Id: 'three', Date: '20/01/2023', Hour: '7:00 PM' }
  // ];

  editpt(k:string) {
    alert(`Edit ${k}`);
  }

  cancelpt(k:string) {
    alert(`Cancel ${k}`);
  }
}

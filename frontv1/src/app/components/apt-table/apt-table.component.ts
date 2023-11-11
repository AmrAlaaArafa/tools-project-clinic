import { Component, OnInit } from '@angular/core';
import {LogInResponse} from "../../models/log-in-response";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-apt-table',
  templateUrl: './apt-table.component.html',
  styleUrls: ['./apt-table.component.css']
})
export class AptTableComponent implements OnInit{
  constructor(private http:HttpClient){}
  ngOnInit(): void{}

  slots = [
    {aDate: '10/11/2023', bTime: '1:00 PM',  cDoctor: 'Andrew', dId: 'one'},
    {aDate: '15/03/2023', bTime: '5:00 PM',  cDoctor: 'Amr',dId: 'two'},
    {aDate: '20/01/2023', bTime: '7:00 PM',cDoctor: 'Nada', dId: 'three',}
  ];

  editpt(k:string) {
    alert(`Edit ${k}`);
  }

  cancelpt(k:string) {
    alert(`Cancel ${k}`);
  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static url= "http://localhost:5000"
  static signupEndPoint = "/signUp"
  static loginEndPoint="/signIn"
  static addslotEndPoint="/addSlot"  
  static briarKey="Hamada__"  
  static getDoctorSlots="/viewSlots"
  static getDoctors="/getDoctors"
  static reserveApt = "/reserveSlot"
  static getAvailableSlots="/viewAvailableSlots"
  static getReservations = "/getReservations"
  static cancelReservations = "/cancelReservation"
  static updateReservation = "/updateReservation"
  // constructor(private http: HttpClient) { }
  // getData(){
  //   let url = "https://clinic-7nhn.onrender.com/user/signup"
  //   return this.http.get(url);
  // }

  // getDoctors(){
  //   let url = "https://clinic-7nhn.onrender.com/user/"
  //   return this.http.get(url);
  // }
  // addSlots(){
  //   let url="https://clinic-7nhn.onrender.com/slot/addslot"
      
  // }


}

//https://jsonplaceholder.typicode.com/todos
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static url= "http://localhost:8000"
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
}

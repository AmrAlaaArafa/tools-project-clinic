import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  static url= "https://backend-nadamaged-dev.apps.sandbox-m3.1530.p1.openshiftapps.com"
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

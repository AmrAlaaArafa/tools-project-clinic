import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAvailableSlotsResponseBody,
  getAvailableSlotsResponseBodyModel,
} from 'src/app/models/getavailableslots.response.body';
import {
  GetDoctorsResponseBodyModel,
  GetDoctorsResponseBody,
} from 'src/app/models/getdoctors.response.body';
import { getReservationsResponseBody } from 'src/app/models/getreservations.response.body';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private elRef: ElementRef
  ) {}
  ngOnInit(): void {
    this.getDoctors();
    this.patient = localStorage.getItem('patientName');
    this.patientId = localStorage.getItem('patientId');
    this.getPatientReservations();
    this.addSlotButton = this.elRef.nativeElement.querySelector('#addSlot');
    this.apply = this.elRef.nativeElement.querySelector('#applyChange');
    this.cna1 = this.elRef.nativeElement.querySelector('#cna1');
    this.cna2 = this.elRef.nativeElement.querySelector('#cna2');
  }
  doctors: Array<GetDoctorsResponseBodyModel> = [];
  slots: Array<getAvailableSlotsResponseBodyModel> = [];
  reservedSlots: any;
  patient: any;
  patientId: any;
  selectedAptId: number = -1;
  selectedDocId: number = 0;
  fakeArray: any;
  addSlotButton: any;
  apply: any;
  cna1: any;
  cna2: any;
  currEdit: number = -1;
  currCancel: number = -1;

  onSelectedDoc(value: string): void {
    var num: number = +value;
    this.selectedDocId = num;
    this.getAvailableSlots(num);
  }

  onSelectedApt(value: string) {
    var num: number = +value;
    this.selectedAptId = num;
  }

  getDoctors() {
    this.http
      .get<GetDoctorsResponseBody[]>(UsersService.url + UsersService.getDoctors)
      .subscribe((data) => {
        if (data != null) {
          this.doctors = data;
        }
      });
  }

  getAvailableSlots(value: number) {
    let body = {
      doctorId: value,
    };
    this.http
      .post<getAvailableSlotsResponseBody[]>(
        UsersService.url + UsersService.getAvailableSlots,
        body
      )
      .subscribe((data) => {
        if (data != null) {
          this.slots = data;
        }
      });
  }

  reserve() {
    if (this.selectedAptId != -1) {
      let body = {
        patientId: this.patientId,
        slotId: this.selectedAptId,
      };
      this.http
        .patch<getAvailableSlotsResponseBody[]>(
          UsersService.url + UsersService.reserveApt,
          body
        )
        .subscribe((data) => {
          if (data != null) {
            alert('reserved successfully');
            this.getPatientReservations();
          }
        });
    }
  }

  getPatientReservations() {
    let body = {
      patientId: this.patientId,
    };
    this.http
      .patch<getReservationsResponseBody>(
        UsersService.url + UsersService.getReservations,
        body
      )
      .subscribe((data) => {
        if (data != null) {
          this.reservedSlots = data;
          this.fakeArray = new Array(data.slots.length);
        }
      });
  }

  signInForm() {
    this.router.navigateByUrl('/login');
  }

  cancelpt(rsr: number) {
    this.currCancel = rsr;
    let body = {
      patientId: this.patientId,
      slotId: this.currCancel,
    };
    this.http
      .patch(UsersService.url + UsersService.cancelReservations, body)
      .subscribe((data) => {
        if (data != null) {
          alert('reservation cancelled!');
          this.getPatientReservations();
          this.ngOnInit;
          this.selectedAptId = -1;
          this.getAvailableSlots(this.selectedDocId);
        }
      });
  }

  editpt(rsr: number) {
    this.addSlotButton.style.display = 'none';
    this.cna1.style.display = 'none';
    this.cna2.style.display = 'block';
    this.apply.style.display = 'inline';
    this.currEdit = rsr;
  }

  applyChange() {
    this.addSlotButton.style.display = 'inline';
    this.cna1.style.display = 'block';
    this.cna2.style.display = 'none';
    this.apply.style.display = 'none';

    if (this.selectedAptId != -1) {
      let body = {
        patientId: this.patientId,
        slotId: this.currEdit,
        newSlotId: this.selectedAptId,
      };
      this.http
        .patch(UsersService.url + UsersService.updateReservation, body)
        .subscribe((data) => {
          if (data != null) {
            alert('updated successfully!');
            this.getPatientReservations();
            this.getAvailableSlots(this.selectedDocId);
          }
        });
    }
  }
}

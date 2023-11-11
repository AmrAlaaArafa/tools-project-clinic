import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})


export class PatientComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {}
  doctors = ['andrew', 'alaa', 'nada']
  slots = [
    '20/01/2023 at 5:00 PM',
    '20/01/2023 at 6:00 PM',
    '20/01/2023 at 7:00 PM',]
  date: string = "2023-11-30";
  time: string = "10:00";
  selectedDoc = '+++++';

  // TODO: SEND THE SELECTED DOCTOR TO THE BD AND GET APTs.
  onSelectedDoc(value:string): void {
		this.selectedDoc = value;
    alert(`${value}`);
	}

  addSlot(){
    // alert(`${this.date} and ${this.time}`);
    alert(this.doctors[2]);
  }

  signInForm(){
    this.router.navigateByUrl('/login');
  }

}


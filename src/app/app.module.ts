import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SlotsTableComponent } from './components/slots-table/slots-table.component';
import { LoginComponent } from './screens/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { DoctorComponent } from './screens/doctor/doctor.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { PatientComponent } from './screens/patient/patient.component';
import { AptTableComponent } from './components/apt-table/apt-table.component';
import { NotificationsComponent } from './screens/notifications/notifications.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    SlotsTableComponent,
    LoginComponent,
    ButtonComponent,
    DoctorComponent,
    AppComponent,
    SignUpComponent,
    PatientComponent,
    AptTableComponent,
    NotificationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

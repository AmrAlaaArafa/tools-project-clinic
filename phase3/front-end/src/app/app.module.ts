import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './screens/login/login.component';
import { DoctorComponent } from './screens/doctor/doctor.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { PatientComponent } from './screens/patient/patient.component';
import { NotificationsComponent } from './screens/notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    DoctorComponent,
    AppComponent,
    SignUpComponent,
    PatientComponent,
    NotificationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

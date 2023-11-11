import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  
  <label style="color: white;">Andrew Samir / Amr Alaa / Nada Maged</label>
  <router-outlet></router-outlet>
  `,
  styles:[]
})
export class AppComponent {
  title = 'first_project';
}

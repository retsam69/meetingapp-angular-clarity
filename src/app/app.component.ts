import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ระบบจองห้องประชุม';
  // enable-disable nav-left
  collapsible: boolean = false;
  collapsed: boolean = true;

}

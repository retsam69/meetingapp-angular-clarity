import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive: any = 0;
  person: any = [
    { id: 1, firstName: 'Nattawuth', lastName: 'Singhata' },
    { id: 2, firstName: 'Jaruwon', lastName: 'Singhata' },
    { id: 3, firstName: 'Kochanoon', lastName: 'Singhata' },
    { id: 4, firstName: 'Korawit', lastName: 'Singhata' }
  ];
  title = 'ระบบจองห้องประชุม';
}

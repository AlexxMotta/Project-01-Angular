import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = 'Robson';
  tv = {
    size: 32,
    brand: 'Roku',
    on: false,
  };
  title = 'sharing-data-between-components';
}

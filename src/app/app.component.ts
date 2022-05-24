import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-weather-app';
  city: string;

  ngOnInit() {
  }

  updateCity($event: string){
    this.city = $event
  }
}

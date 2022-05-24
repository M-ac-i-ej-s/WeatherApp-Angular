import { Component, Input, OnInit,SimpleChanges } from '@angular/core';
import { WheaterApiService } from 'src/app/services/wheater-api.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  @Input() city1: string;
  celciusValue: number = 0;
  placeValue: string = "";

  constructor(private wheaterService: WheaterApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.wheaterService.getWeather(this.city1).subscribe((place => {
      console.log(place)
      this.placeValue = place['name']
      this.celciusValue = Math.round(place['main']['temp']-273)
    }))
  }


}

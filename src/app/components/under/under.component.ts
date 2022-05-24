import { Component, OnInit, Input,SimpleChanges } from '@angular/core';
import { faArrowDownLong, faArrowUpLong, faCloud, faSun, faWind } from '@fortawesome/free-solid-svg-icons';
import { WheaterApiService } from 'src/app/services/wheater-api.service';

@Component({
  selector: 'app-under',
  templateUrl: './under.component.html',
  styleUrls: ['./under.component.css']
})
export class UnderComponent implements OnInit {
  @Input() city1: string;
  faWind = faWind;
  faCloud = faCloud;
  faSun = faSun;
  faArrowUpLong = faArrowUpLong;
  faArrowDownLong = faArrowDownLong;
  windDirValue: string;
  windSpeedValue: string;
  cloudsPerValue: string;
  sunRiseValue: string;
  sunSetValue: string;
  constructor(private wheaterService: WheaterApiService) { }

  
  ngOnInit(): void {
  }
  convertHMS(value) {
    var date = new Date(value * 1000);
    return date.toLocaleTimeString();
  }
  direction(value) : string {
      if(0 <= value && value < 45 || 315< value && value< 360) return "North"
      if(45 <= value && value < 135) return "West"
      if(135 <= value && value < 225) return "South"
      if(225 <= value && value < 315) return "East"
      else return ""
  }
  ngOnChanges(changes: SimpleChanges) {
    this.wheaterService.getWeather(this.city1).subscribe((place => {
      console.log(place)
      this.windDirValue = place['wind']['deg']
      this.windSpeedValue = place['wind']['speed']
      this.cloudsPerValue = place['clouds']['all']
      this.sunRiseValue = place['sys']['sunrise']
      this.sunSetValue = place['sys']['sunset']
    }))
  }

}

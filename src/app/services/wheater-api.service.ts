import { Injectable } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class WheaterApiService {
  constructor(private http:HttpClient) { }

  getWeather(value : string): Observable<Object> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=1ad92159eb08e9212c1e2b681ff4f804`);  
  }
}


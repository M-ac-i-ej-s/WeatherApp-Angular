import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() newCity: EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  getVal(value: string){
    this.newCity.emit(value);
  }

}

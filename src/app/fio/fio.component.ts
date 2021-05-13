import { Component, OnInit } from '@angular/core';
import {Person}from '../mock';

@Component({
  selector: 'app-fio',
  template: '<h1>{{person.name}} {{person.surname}}</h1><div [ngSwitch]="person">       </div><p><span>Phone: </span>{{person.phone}}</p><p><span>City: </span>{{person.city}}</p>'+
  '<p><span>Желаемый уровень заработной платы: </span>{{num|currency}}</p><p><span>PercentPipe: </span>{{num|percent}}</p>',
  styleUrls: ['./fio.component.css']
})
export class FIOComponent implements OnInit {
person=Person;
num=12345;

  constructor() { }

  ngOnInit(): void {
  }

}
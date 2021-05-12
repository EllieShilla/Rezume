import { Component, OnInit } from '@angular/core';
import{PersonalInf} from '../fio';

@Component({
  selector: 'app-fio',
  template: '<h1>{{person.name}} {{person.surname}}</h1><p><span>Phone: </span>{{person.phone}}</p><p><span>City: </span>{{person.city}}</p>',
  styleUrls: ['./fio.component.css']
})
export class FIOComponent implements OnInit {
person:PersonalInf={
	name:"Name",
	surname:"Surname",
	secondName:"df",
	phone:12345,
	city:"SomeCity"
};

  constructor() { }

  ngOnInit(): void {
  }

}
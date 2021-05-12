import { Component, OnInit } from '@angular/core';
import {Work} from '../work';

@Component({
  selector: 'app-work-experience',
  template: `<h2>Опыт работы</h2><div *ngFor="let item of arr"><p><span>Дата поступления:</span> {{item.firstDate| date:"shortDate"}}</p><p><span>Дата ухода:</span> {{item.secondDate| date:"shortDate"}}</p><p><span>Место работы:</span> {{item.placeOfWork}}</p><p><span>Должность:</span> {{item.position}}</p></div>`,
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

arr: any[] = [
    {
      firstDate:new Date("2011-11-11"),secondDate:new Date("2012-12-12"),placeOfWork:"placeOfWork1",position:"position1"
    },
    {
      firstDate:new Date("2013-10-01"),secondDate:new Date("2014-12-12"),placeOfWork:"placeOfWork2",position:"position2"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }
}



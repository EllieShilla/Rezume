import { Component, OnInit } from '@angular/core';

import {WorkArr}from '../mock';

@Component({
  selector: 'app-work-experience',
  template: `<h2 *ngIf="arr.length>1">Места работы</h2><h2 *ngIf="arr.length==1">Место работы</h2><div *ngFor="let item of arr"><p><span>Дата поступления:</span>{{item.firstDate| date:"shortDate"}}</p>`+
  `<p><span>Дата ухода:</span> {{item.secondDate| date:"shortDate"}}</p><p><span>Место работы:</span> <span [ngClass]="{colorStyle:true}">{{item.placeOfWork|uppercase}}</span></p>`+
  `<p><span>Должность:</span> {{item.position| lowercase}}</p></div>`,
  styles: [`.colorStyle{background-color:#dfd0f5;}`]
})
export class WorkExperienceComponent implements OnInit {

arr=WorkArr;


  constructor() { }

  ngOnInit(): void {
  }
}



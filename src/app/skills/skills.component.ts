import { Component, OnInit } from '@angular/core';
import {Attainments} from '../Skills';

@Component({
  selector: 'app-skills',
  template: '<h1>Умения</h1><h2>Навыки</h2><li *ngFor="let item of inform.skills">{{item}}</li><h2>Знания</h2><li *ngFor="let item of inform.knowledge">{{item}}</li><h2>Сертификаты</h2><li *ngFor="let item of inform.certificate">{{item}}</li>',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
inform:Attainments={
	skills:["skill1","skill2"],
	knowledge:["knowledge1","knowledge2","knowledge3"],
	certificate:["certificate"]
}

  constructor() { }

  ngOnInit(): void {
  }

}
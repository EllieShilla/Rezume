import { Component, OnInit } from '@angular/core';
import{DataSkills}from '../data.service';
import{Attainments}from '../Skills';

@Component({
  selector: 'app-skills',
  template: `<h1>Умения</h1><div *ngFor="let i of title" [ngSwitch]="i"><h2 *ngSwitchCase="'Навыки'" [ngClass]="{colorStyle:true}">{{i}}</h2><span *ngFor="let item of items.skills" [ngStyle]="{'font-size':'16px'}"><p *ngSwitchCase="'Навыки'" [ngStyle]="{'font-weight':'370'}">{{item}}</p></span><h2 *ngSwitchCase="'Знания'" [ngClass]="{colorStyle:true}">{{i}}</h2><p *ngFor="let item of items.knowledge" [ngStyle]="{'font-size':'16px'}"><span *ngSwitchCase="'Знания'" [ngStyle]="{'font-weight':'370'}">{{item}}</span></p><h2 *ngSwitchCase="'Сертификаты'" [ngClass]="{colorStyle:true}">{{i}}</h2><p *ngFor="let item of items.certificate" [ngStyle]="{'font-size':'16px'}"><span *ngSwitchCase="'Сертификаты'" [ngStyle]="{'font-weight':'370'}">{{item}}</span></p></div>`,
  styles: ['.colorStyle{background-color:#dfd0f5;}'],
  providers:[DataSkills]
  
})

export class SkillsComponent implements OnInit {
title:string[]=["Навыки","Знания","Сертификаты"];
items:Attainments={skills:[],knowledge:[],certificate:[]};

  constructor(private dataSkills:DataSkills) { }

  ngOnInit()  {
    this.items=this.dataSkills.getDataSkills();
  }

}
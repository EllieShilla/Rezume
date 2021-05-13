import {Work} from './work';
import {Attainments} from './Skills';
import{PersonalInf} from './fio';

export const WorkArr: any[] = [
    {
      firstDate:new Date("2011-11-11"),secondDate:new Date("2012-12-12"),placeOfWork:"placeOfWork1",position:"position1"
    },
    {
      firstDate:new Date("2013-10-01"),secondDate:new Date("2014-12-12"),placeOfWork:"placeOfWork2",position:"pOsition2"
    }
  ];

  export const Inform:Attainments={
      skills:["skill1","skill2"],
      knowledge:["knowledge1","knowledge2","knowledge3"],
      certificate:["certificate"]
    };

      export const Person:PersonalInf={
        name:"Name",
        surname:"Surname",
        secondName:"df",
        phone:12345,
        city:"SomeCity"
      };
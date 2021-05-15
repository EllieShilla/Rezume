import{Work} from './work';

export class DataWork{
private WorkArr: any[] = [
    {
      firstDate:new Date("2011-11-11"),secondDate:new Date("2012-12-12"),placeOfWork:"placeOfWork1",position:"position1"
    },
    {
      firstDate:new Date("2013-10-01"),secondDate:new Date("2014-12-12"),placeOfWork:"placeOfWork2",position:"pOsition2"
    }
  ];

  getWork():any{
  return this.WorkArr;
  }	
}


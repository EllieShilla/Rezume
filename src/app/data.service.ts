import {Attainments} from './Skills';

export class DataSkills{
  Inform:Attainments={
      skills:["skill1","skill2"],
      knowledge:["knowledge1","knowledge2","knowledge3"],
      certificate:["certificate"]
    };

    getDataSkills():Attainments{
        return this.Inform;
    }
}


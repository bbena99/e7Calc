export interface Character {
  name : string;
  nameNoSpace : string;
  element : number;
  class : number;
  sign : number;
  engraveStat:number;
  engrave:number[];
  base_stats: {
    'Attack' : number;
    'Defense' : number;
    'Health' : number;
    'Speed' : number;
    'Critical Hit Chance' : number;
    'Critical Hit Damage' : number;
    'Effectiveness' : number;
    'Effect Resistance' : number;
    'Dual Attack Chance' : number;
  };
  gear_stats : {
    'Attack' : number;
    'Defense' : number;
    'Health' : number;
    'Speed' : number;
    'Critical Hit Chance' : number;
    'Critical Hit Damage' : number;
    'Effectiveness' : number;
    'Effect Resistance' : number;
    'Dual Attack Chance' : number;
  }
}

export function newChar():Character{
  return {
    name : "",
    nameNoSpace : "",
    element : 0,
    class : 0,
    sign : 0,
    engraveStat:0,
    engrave:[],
    base_stats: {
      'Attack' : 0,
      'Defense' : 0,
      'Health' : 0,
      'Speed' : 0,
      'Critical Hit Chance' : 0,
      'Critical Hit Damage' : 0,
      'Effectiveness' : 0,
      'Effect Resistance' : 0,
      'Dual Attack Chance' : 0,
    },
    gear_stats : {
      'Attack' : 0,
      'Defense' : 0,
      'Health' : 0,
      'Speed' : 0,
      'Critical Hit Chance' : 0,
      'Critical Hit Damage' : 0,
      'Effectiveness' : 0,
      'Effect Resistance' : 0,
      'Dual Attack Chance' : 0
    }
  }
}
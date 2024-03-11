export interface Character {
  name : string,
  nameNoSpace : string
  element : number,
  class : number,
  sign : number
  base_stats: {
    'Attack' : number,
    'Defense' : number,
    'Health' : number,
    'Speed' : number,
    'Critical Hit Chance' : number,
    'Critical Hit Damage' : number,
    'Effectiveness' : number,
    'Effect Resistance' : number,
    'Dual Attack Chance' : number,
  },
  gear_stats : {
    'Attack' : number,
    'Defense' : number,
    'Health' : number,
    'Speed' : number,
    'Critical Hit Chance' : number,
    'Critical Hit Damage' : number,
    'Effectiveness' : number,
    'Effect Resistance' : number,
    'Dual Attack Chance' : number
  }
}

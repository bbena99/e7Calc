export interface Gear {
  id:number,
  level : number, //index of level[] from constants
  type : number,  //enum
  main : number,  //enum for constants.ts/STAT_ENUM
  hits : number[],//array of 0,1,2,3 for which sub got hit
  subs : {
    stat:number,
    value:number|undefined
  }[],
}
export function newGear():Gear{
  return {
    id:0,
    level: 0,
    type: -1,
    main: 0,
    hits: [0,0,0,0,0],
    subs: [
      {stat:0,value:undefined},
      {stat:1,value:undefined},
      {stat:2,value:undefined},
      {stat:3,value:undefined},
    ]
  }
}

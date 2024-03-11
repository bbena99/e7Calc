export interface Gear {
  level : number, //index of level[] from constants
  type : number|undefined,  //enum
  main : number,  //enum for constants.ts/STAT_ENUM
  hits : number[],//array of 0,1,2,3 for which sub got hit
  subs : {
    stat:number,
    value:number|undefined
  }[],
}

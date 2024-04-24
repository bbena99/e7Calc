import { Constants } from "../constants/constants"
export interface Gear {
  id:number,
  level : number, //index of level[] from constants
  type : number,  //enum for gear set type
  posibleMain:number[], //All possible main stats of this type of gear
  main : number,  //enum for constants.ts/STAT_ENUM
  hits : number[],//array of 0,1,2,3 for which sub got hit
  posibleSubs:number[], //All possible sub stats for this type of gear.
  subs : {
    stat:number,
    value:number|undefined
  }[],
}
export function newGear():Gear{
  return {
    id:0,
    level: Constants.LEVEL_ENUM.length-1,
    type: 0,
    posibleMain:[],
    main: 0,
    hits: [0,0,0,0,0],
    posibleSubs:[],
    subs: [
      {stat:0,value:undefined},
      {stat:1,value:undefined},
      {stat:2,value:undefined},
      {stat:3,value:undefined},
    ]
  }
}

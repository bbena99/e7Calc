export interface Stat {
  name: string,
  main : number[],
  minSub : number[],
  maxSub : number[],
}

export function newStat():Stat{
  return {
    name:"",
    main:[],
    minSub:[],
    maxSub:[]
  }
}
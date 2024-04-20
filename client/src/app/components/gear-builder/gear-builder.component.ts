import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { Character, newChar } from 'src/app/models/character';
import { Gear, newGear } from 'src/app/models/gear';
import { CharacterService } from 'src/app/services/character.service';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-gear-builder',
  templateUrl: './gear-builder.component.html',
  styleUrls: ['./gear-builder.component.css']
})
export class GearBuilderComponent {
  constants = Constants
  name:string
  char:Character
  gear:Gear[]
  statkeys:string[]=[]
  constructor(
    private router:Router,
    private charService:CharacterService,
    private equipService:EquipmentService
  ){
    const url = window.location.href.split('/')
    this.name = url[url.length-1]
    console.log(this.name)
    this.char=newChar()
    charService.getOne(this.name)?.subscribe(char=>{
      console.log(char)
      this.char=char
      this.statkeys=Object.keys(this.char.base_stats)
    })
    this.gear=[
      {...newGear(), main:0},
      {...newGear(), main:2,id:1},
      {...newGear(), main:1,id:2},
      {...newGear(), main:3,id:3},
      {...newGear(), main:3,id:4},
      {...newGear(), main:3,id:5},
    ]
    this.gear[0].subs[0].stat=4
    this.gear[1].subs[1].stat=4
    this.gear[2].subs[2].stat=4
  }
  getBase(key:string):string{
    //@ts-ignore
    return this.char.base_stats[key]
  }
  getPostGear(key:string):string{
    //@ts-ignore
    return this.char.gear_stats[key]
  }
  getMin(stat: number,gear: Gear):string {
    let  ret:number = this.constants.STAT_ENUM[stat].minSub[gear.level]
    ret = ret*(gear.hits.filter(hit=>gear.subs[hit].stat===stat).length+1)
    return ""+ret
  }
  getMax(stat:number,gear:Gear):string{
    let  ret:number = this.constants.STAT_ENUM[stat].maxSub[gear.level]
    ret = ret*(gear.hits.filter(hit=>gear.subs[hit].stat===stat).length+1)
    return ""+ret;
  }
  isUsed(checker:Gear,val:number):boolean{
    if(checker.main===val)return true;
    const boolArr:boolean[] = checker.subs.map(s=>{return (s.stat===val)?true:false;})
    const ret:boolean = boolArr.indexOf(true)>=0;
    return (boolArr.indexOf(true)>=0)?true:false
  }
  nav(){
    this.router.navigateByUrl("/Home")
  }
  changer(core:number|undefined,){
    console.log("gear-builder.component.ts/changer("+core+")")
  }
  debugg(p:any){
    console.log(p)
  }
}

function delay(ms:number){
  return new Promise( res => setTimeout(res,ms))
}


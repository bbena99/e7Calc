import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  constants:any
  charList? :Map<string,Character>
  constructor (
    public router:Router,
    public charService:CharacterService,
  ){
    //console.log("character-list.component.ts/constructor()")
    this.constants = Constants
      charService.getAll((e:Map<string,Character>)=>{
        this.charList=e
        console.log(this.charList)
      })
  }
  nav(char:Character){
    console.log(char)
    this.router.navigateByUrl('/Character/'+char.nameNoSpace)
  }
}
function delay(ms:number){
  return new Promise( res => setTimeout(res,ms))
}

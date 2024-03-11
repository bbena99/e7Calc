import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character } from '../models/character';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit {
  private URL : string = Constants.API_VERSION
  private charMap:Map<string,Character>
  private char:Character
  public charSubject: BehaviorSubject<Map<string,Character>>

  constructor(
    private http : HttpClient
  ) {
    console.log("character.service.ts/ngOninit()")
    this.charMap=new Map<string,Character>()
    this.charSubject = new BehaviorSubject<Map<string,Character>>(this.charMap)
    this.char=newChar()
    this.ngOnInit()
  }
  ngOnInit(): void {
    this.getAll((inMap:Map<string,Character>)=>{
      this.charMap=inMap
      this.char!=inMap.get(Object.keys(inMap)[0])
      console.log(this.charMap)
      this.charSubject.next(this.charMap)
    })
  }

  /**
   * Start of external function calls
   */
  public getAll(callback:(inMap:Map<string,Character>)=>void):void{
    //console.log("character.service.ts/getAll()")
    if(this.charMap.size>0){
      callback(this.charMap)
      return
    }
    this.parseAll().subscribe((cArray)=>{
      let newMap = new Map<string,Character>()
      cArray.forEach(c=>newMap.set(c.nameNoSpace,c))
      callback(newMap)
    })
  }
  public getOne(name:string,callback:(inChar:Character)=>void):void{
    let retChar = this.charMap.get(name)
    if(retChar){
      callback(retChar)
      return
    } else {
      this.parseOne(name).subscribe((char:Character)=>{
        callback(char)
      })
    }
  }
  /**
   * Start of api function calls
  */
  parseAll():Observable<Character[]> {
   return this.http
   .get<Character[]>( this.URL+'/characters')
   .pipe<Character[]>( tap( cArray => {
      this.setAll(cArray)
    }))
  }
  parseOne(name:string):Observable<Character>{
    return this.http
    .get<Character>(this.URL+'/characters/'+name)
    .pipe<Character>( tap( char =>{
      this.setOne({...newChar(),...char})
    }))
  }
  /**
   * Start of internal function calls
   */
  private setAll(cArray:Character[]):void{
    let charMap=new Map<string,Character>()
    cArray.forEach(c=>charMap.set(c.nameNoSpace,{...newChar(),...c}))
    this.charSubject.next(charMap)
  }
  private setOne(char:Character):void{
    this.char=char
  }
}

function newChar():Character{
  return {
    name : "",
    nameNoSpace : "",
    element : 0,
    class : 0,
    sign : 0,
    base_stats: {
      'Attack' : 0,
      'Defense' : 0,
      'Health' : 0,
      'Speed' : 0,
      'Critical Hit Chance' : 0,
      'Critical Hit Damage' : 0,
      'Effectiveness' : 0,
      'Effect Resistance' : 0,
      'Dual Attack Chance' : 0
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

function delay(ms:number){
  console.log("here")
  return new Promise( res => setTimeout(res,ms))
}

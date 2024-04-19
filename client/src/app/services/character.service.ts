import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character, newChar } from '../models/';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit {
  private URL : string = Constants.API_VERSION
  private charMap:Map<string,Character>
  private charMapSubject: BehaviorSubject<Map<string,Character>>
  private char:Character
  private charSubject: BehaviorSubject<Character>

  constructor(
    private http : HttpClient
  ) {
    this.charMap=new Map<string,Character>()
    this.charMapSubject = new BehaviorSubject<Map<string,Character>>(this.charMap)
    this.char=newChar()
    this.charSubject = new BehaviorSubject<Character>(this.char)
  }
  ngOnInit(): void {
    this.parseAll()
  }

  /**
   * Start of external function calls
   */
  public getAll():Observable<Map<string,Character>>{
    //console.log("character.service.ts/getAll()")
    //console.log(this.charMap)
    return this.charMap.size>1
      ?(this.charMapSubject.asObservable())
      :(this.parseAll())
  }
  public getOne(name:string):Observable<Character>|undefined{
    //console.log(this.charMap)
    if(this.char.nameNoSpace===name)return this.charSubject.asObservable()
    return this.parseOne(name)
  }
  /**
   * Start of api function calls
  */
  private parseAll():Observable<Map<string,Character>> {
    return this.http
      .get<Map<string,Character>>( this.URL+'/characters')
      .pipe<Map<string,Character>>( tap( 
          //@ts-ignore
          cArray => {this.setAll(cArray)},
          err=>{console.error(err)}
        ))
  }
  private parseOne(name:string):Observable<Character>{
    return this.http
      .get<Character>(this.URL+'/characters/'+name)
      .pipe<Character>(tap(c=>{
        this.setOne(c)
      }))
  }
  /**
   * Start of internal function calls
   */
  private setAll(cArray:Character[]):void{
    let charMap=new Map<string,Character>()
    cArray.forEach(c=>charMap.set(c.nameNoSpace,{...newChar(),...c}))
    this.charMapSubject.next(charMap)
  }
  private setOne(c:Character):void{
    this.char = c
    if(!this.char.gear_stats)this.char.gear_stats={...this.char.base_stats}
    this.charMap.set(this.char.nameNoSpace,this.char)
    console.log(this.char)
    this.charSubject.next(c)
    this.charMapSubject.next(this.charMap)
  }
}
function delay(ms:number){
  console.log("here")
  return new Promise( res => setTimeout(res,ms))
}

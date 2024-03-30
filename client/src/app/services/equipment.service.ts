import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Gear } from '../models/gear';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private url:string = Constants.API_VERSION
  private equipArray: Gear[]
  private equipArraySubject: BehaviorSubject<Gear[]>
  private equip?:Gear
  private equipSubject: BehaviorSubject<Gear|undefined>

  constructor(
    private http : HttpClient
  ) {
    this.equipArray=[]
    this.equip=this.equipArray[0]
    this.equipArraySubject=new BehaviorSubject<Gear[]>(this.equipArray)
    this.equipSubject=new BehaviorSubject<Gear|undefined>(this.equipArray[0])
  }
  /**
   * Start of external fn calls
   */
  public getAll():Observable<Gear[]>{
    if(this.equipArray.length>0)return this.equipArraySubject.asObservable()
    return this.parseAll()
  }
  public getOne():Observable<Gear|undefined>{
    return this.equip
      ?(this.equipSubject.asObservable())
      :(this.parseOne())
  }
  public newEquipment(gear:Gear):void{
    this.equipArray.push(gear)
    this.http
      .post<Gear>(this.url,gear)
      .pipe<Gear>(tap(gear=>{
        this.setOne(gear)
      }))
  }
  /**
   * Start of parse fn calls
   */
  private parseAll():Observable<Gear[]>{
    return this.http
      .get<Gear[]>(this.url)
      .pipe<Gear[]>(tap(gear=>{
        this.setAll(gear)
      }))
  }
  private parseOne():Observable<Gear>{
    return this.http
      .get<Gear>(this.url)
      .pipe<Gear>(tap(gear=>{
        this.setOne(gear)
      }))
  }
  /**
   * Start of private fn calls
   */
  private setAll(gear:Gear[]):void{
    this.equipArraySubject.next(gear)
  }
  private setOne(gear:Gear):void{
    if(gear.id){
      this.equipArray[gear.id]=gear;
      this.equipArraySubject.next(this.equipArray)
    }
    this.equipSubject.next(gear)
  }
}

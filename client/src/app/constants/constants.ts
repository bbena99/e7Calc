import { Stat } from "../models/stat";
export class Constants {
  public static API_VERSION : string = '/api/v1'
  public static LEVEL_ENUM : number[] = [
    /*0*/55,
    /*1*/67,
    /*2*/70,
    /*3*/75,
    /*4*/78,
    /*5*/85,
    /*6*/88,
    /*7*/90
  ]
  public static GEAR_ENUM : string[] = [
    /*00*/ 'Attack',
    /*01*/ 'Defense',
    /*02*/ 'Health',
    /*03*/ 'Speed',
    /*04*/ 'Critical',
    /*05*/ 'Destruction',
    /*06*/ 'Hit',
    /*07*/ 'Resist',
    /*08*/ 'Lifesteal',
    /*09*/ 'Counter',
    /*10*/ 'Unity',
    /*11*/ 'Immunity',
    /*12*/ 'Rage',
    /*13*/ 'Penetration',
    /*14*/ 'Revenge',
    /*15*/ 'Injury',
    /*16*/ 'Protection',
    /*17*/ 'Torrent'
  ]
  public static STAT_ENUM : Stat[] = [
    /*00*/ {
      name:'Attack',
      main:[330,425,440,465,475,500,515,525],
      minSub:[25,25,25,30,30,30,40,40,40],
      maxSub:[40,40,40,45,45,45,50,50,50],
    },
    /*01*/ {
      name:'Defense',
      main:[190,245,260,275,285,300,310,310],
      minSub:[20,20,20,25,25,25,30,30],
      maxSub:[30,30,30,35,35,35,40,40],
    },
    /*02*/ {
      name:'Health',
      main:[1780,2295,2360,2495,2565,2700,2765,2835],
      minSub:[100,100,100,140,140,140,160,160],
      maxSub:[170,170,170,210,210,210,250,250]
    },
    /*03*/ {
      name:'Attack%',
      main:[50,50,50,60,60,60,65,65],
      minSub:[4,4,4,4,4,4,5,5],
      maxSub:[7,7,7,8,8,8,9,9]
    },
    /*04*/ {
      name:'Defense%',
      main:[50,50,50,60,60,60,65,65],
      minSub:[4,4,4,4,4,4,5,5],
      maxSub:[7,7,7,8,8,8,9,9]
    },
    /*05*/ {
      name:'Health%',
      main:[50,50,50,60,60,60,65,65],
      minSub:[4,4,4,4,4,4,5,5],
      maxSub:[7,7,7,8,8,8,9,9]
    },
    /*06*/ {
      name:'Speed',
      main:[35,35,35,40,40,40,45,45],
      minSub:[1,1,1,1,1,1,2,2],
      maxSub:[4,4,4,4,4,4,5,5]
    },
    /*07*/ {
      name:'Critical Hit Chance',
      main:[45,45,45,55,55,55,60,60],
      minSub:[2,2,2,3,3,3,4,4],
      maxSub:[4,4,4,5,5,5,6,6]
    },
    /*08*/ {
      name:'Critical Hit Damage',
      main:[55,55,55,65,65,65,70,70],
      minSub:[3,3,3,3,3,3,4,4],
      maxSub:[6,6,6,7,7,7,8,8]
    },
    /*09*/ {
      name:'Effectiveness',
      main:[50,50,50,60,60,60,65,65],
      minSub:[4,4,4,4,4,4,5,5],
      maxSub:[7,7,7,8,8,8,9,9]
    },
    /*10*/ {
      name:'EffectResistance',
      main:[50,50,50,60,60,60,65,65],
      minSub:[4,4,4,4,4,4,5,5],
      maxSub:[7,7,7,8,8,8,9,9]
    }
  ]
  public static ELEMENT_ENUM : string[] = [
    /*0*/ 'Fire',
    /*1*/ 'Ice',
    /*2*/ 'Earth',
    /*3*/ 'Light',
    /*4*/ 'Dark'
  ]
  public static CLASS_ENUM : string[] = [
    /*0*/ 'Warrior',
    /*1*/ 'Knight',
    /*2*/ 'Thief',
    /*3*/ 'Ranger',
    /*4*/ 'Mage',
    /*5*/ 'Soul Weaver'
  ]
  public static SIGN_ENUM : string[] = [
    /*00*/ 'Aries',
    /*01*/ 'Taurus',
    /*02*/ 'Gemini',
    /*03*/ 'Cancer',
    /*04*/ 'Leo',
    /*05*/ 'Virgo',
    /*06*/ 'Libra',
    /*07*/ 'Scorpio',
    /*08*/ 'Sagittarius',
    /*09*/ 'Capricorn',
    /*10*/ 'Aquarius',
    /*11*/ 'Pisces'
  ]
}

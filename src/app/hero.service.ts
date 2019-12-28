import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'//single shared instance of service
})

export class HeroService {

  


  constructor() { }
  //says return an obervable instance
  //of a Hero[] from HEROES, emits a single value
  getHeroes():Observable<Hero[]>{
    return  of (HEROES);
  }

}

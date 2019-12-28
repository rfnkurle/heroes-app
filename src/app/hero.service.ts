import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'//single shared instance of service
})

export class HeroService {

  


  constructor() { }

  getHeroes():Hero[]{
    return HEROES;
  }

}

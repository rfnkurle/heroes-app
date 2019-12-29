import { Injectable } from '@angular/core';
import { Hero } from './hero';//would be imported as real data like from database
import { HEROES } from './mock-heroes';//would be imported as real data like from database
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'//single shared instance of service
})

export class HeroService {

  


  constructor(private messageService: MessageService) { } //service in service 
  //says return an obervable instance
  //of a Hero[] from HEROES, emits a single value
  getHeroes():Observable<Hero[]>{
    this. messageService.add('HeroService: fetched heroes')

    return  of (HEROES);

    

  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES; 
  //names a property that can be used in HTML, set to HEROES array
  //heroes holds the mock heroes list from the HeroesComponent class, the mock heroes list.
  //hero holds the current hero object for each iteration through the list.
  
  
  selectedHero: Hero;
//creates selectedHero property but does not assign it
 //previously assigned 
  constructor() { }

  ngOnInit() {
    
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}

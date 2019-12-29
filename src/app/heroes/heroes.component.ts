import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { HEROES } from '../mock-heroes';//not needed anymore since HEROES is provdied by HeroService
import{ HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[]; 
  //names a property that can be used in HTML, set to HEROES array
  //heroes holds the mock heroes list from the HeroesComponent class, the mock heroes list.
  //hero holds the current hero object for each iteration through the list.
  
  
  selectedHero: Hero;
//creates selectedHero property but does not assign it
 //previously assigned 

 //simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    //subscribe b/c of Observable in hero service,
    //which matches heroes(Hero[]) property in this component
    .subscribe(heroes => this.heroes = heroes)
  }

}

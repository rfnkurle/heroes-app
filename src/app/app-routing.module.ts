import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';//need to import to be able to use in const routes

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],//initializes router data and and listens for browser location changes
  exports: [RouterModule]//export makes RouterModule available throughout the app
})
export class AppRoutingModule { }
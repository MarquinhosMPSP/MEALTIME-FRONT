import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LugaresComponent } from '../lugares/lugares.component';
import { CardapioComponent } from '../cardapio/cardapio.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cardapio'},
  { path: 'lugares', component: LugaresComponent},
  { path: 'cardapio', component: CardapioComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoteamentoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LugaresComponent } from '../components/lugares/lugares.component';
import { CardapioComponent } from '../components/cardapio/cardapio.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { FormularioComponent } from '../components/cardapio/formulario/formulario.component';
import { LoginComponent } from '../pages/login/login.component';
import { MainComponent } from '../pages/main/main.component';
import { OwnerGuard } from '../guards/owner.guard';
import { RememberLoginGuard } from '../guards/remember-login.guard';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent, canActivate: [RememberLoginGuard] },
  { path: 'home', component: MainComponent, canActivate: [OwnerGuard], canActivateChild: [OwnerGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'cardapio' },
      { path: 'lugares', component: LugaresComponent },
      { path: 'cardapio', component: CardapioComponent },
      { path: 'cardapio/formulario', component: FormularioComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
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

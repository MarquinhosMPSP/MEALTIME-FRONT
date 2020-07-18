import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LugaresComponent } from './lugares/lugares.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { RoteamentoModule } from './roteamento/roteamento.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './cardapio/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    CardapioComponent,
    PageNotFoundComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoteamentoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents:[
    FormularioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

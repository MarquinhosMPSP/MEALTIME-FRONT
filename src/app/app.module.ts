import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LugaresComponent } from './components/lugares/lugares.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { RoteamentoModule } from './roteamento/roteamento.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormularioComponent } from './components/cardapio/formulario/formulario.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    CardapioComponent,
    PageNotFoundComponent,
    FormularioComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoteamentoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents:[
    FormularioComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroRestaurante } from '../model/cadastro-restaurante';
import { promise } from 'protractor';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CadastroRestauranteService {

  constructor(private http: HttpClient) { }

  public api_url:string = 'https://staging-mealtime-api.herokuapp.com';

  cadastrar(restaurante):Promise<CadastroRestaurante>{
    return this.http.post<CadastroRestaurante>(`${this.api_url}/restaurantes`, restaurante).toPromise();
  }

}

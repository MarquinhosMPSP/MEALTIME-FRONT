import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cardapio } from '../model/cardapio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(private http: HttpClient) { }

  public api_url:string = 'https://staging-mealtime-api.herokuapp.com';

  getIndex():Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(`${this.api_url}/itens`)
  }

  editar(id:number, item: Cardapio):Observable<Cardapio>{
    return this.http.put<Cardapio>(`${this.api_url}/itens/${id}`, item)
  }
}

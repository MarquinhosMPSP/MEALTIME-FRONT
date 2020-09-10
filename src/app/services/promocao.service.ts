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

  editar(id:number, porcentagem: any):Observable<Cardapio>{
    let promocao:number = porcentagem.desconto;
    let tratado = {
      idItem: id,
      promocao: promocao
    }
    console.log(tratado);
    return this.http.patch<Cardapio>(`${this.api_url}/itens/promocao`, tratado)
  }
}

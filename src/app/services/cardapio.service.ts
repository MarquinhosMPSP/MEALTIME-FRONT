import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cardapio } from '../model/cardapio';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient, private userService: UserService) { }

  public api_url:string = 'https://staging-mealtime-api.herokuapp.com';
  public user = this.userService.getUser();

  getIndex():Observable<Cardapio[]>{
    return this.http.get<Cardapio[]>(`${this.api_url}/itens`)
  }

  delete(item: Cardapio):Observable<any>{
    return this.http.delete(`${this.api_url}/itens/${item.idItem}`)
  }

  cadastrar(item: Cardapio):Observable<Cardapio>{
    return this.http.post<Cardapio>(`${this.api_url}/itens`, {...item, idRestaurante: this.user.idRestaurante})
  }

  editar(id:number, item: Cardapio):Observable<Cardapio>{
    return this.http.put<Cardapio>(`${this.api_url}/itens/${id}`, item)
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugares } from '../model/lugares';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(
    private http: HttpClient,
    private user: UserService
    ) { }

  public api_url:string = 'https://staging-mealtime-api.herokuapp.com';
  

  getIndex():Observable<Lugares[]>{
    return this.http.get<Lugares[]>(`${this.api_url}/mesas`)
  }

  delete(item:Lugares):Observable<any>{
    return this.http.delete<any>(`${this.api_url}/mesas/${item.idMesa}`)
  }

  cadastrar(item: Lugares):Observable<Lugares>{
    let {idRestaurante} = this.user.getUser()
    return this.http.post<Lugares>(`${this.api_url}/mesas`, {...item, idRestaurante})
  }

  editar(id:number, item: Lugares):Observable<Lugares>{
    return this.http.put<Lugares>(`${this.api_url}/mesas/${id}`, item)
  }

}

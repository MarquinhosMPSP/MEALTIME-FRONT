import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    private http: HttpClient,
    private user: UserService) { }

  public api_url:string = 'https://staging-mealtime-api.herokuapp.com';

  getIndex():Observable<any[]>{
    let {idRestaurante} = this.user.getUser()
    return this.http.get<any[]>(`${this.api_url}/pedidos/restaurante/${idRestaurante}`)
  }
}

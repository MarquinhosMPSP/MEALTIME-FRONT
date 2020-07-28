import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../model/reserva';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient, private userService: UserService) { }

  public api_url:string = environment.apiURL;
  public user = this.userService.getUser();

  getIndex():Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.api_url}/reservas`)
  }

  getFiltros(data, status):Observable<Reserva[]>{
    let dateAtual = new Date();
    data = data ? data :  dateAtual;
    return this.http.get<Reserva[]>(`${this.api_url}/reservas/filtro`,
      {params: {dataReserva: data, status: status, idRestaurante: this.user.idRestaurante}}
    )
  }

  getStatus(status):Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.api_url}/reservas/filtro`,
      {params: {status: status, idRestaurante: this.user.idRestaurante}}
    )
  }

  atualizarReserva(item: Reserva, status: string):Observable<any>{
    return this.http.put<any>(`${this.api_url}/reservas/${item.idReserva}`, {status});
  }

}

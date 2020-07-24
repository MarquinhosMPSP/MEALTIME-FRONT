import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../model/reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) { }

  public api_url:string = 'https://staging-mealtime-api.herokuapp.com';

  getIndex():Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.api_url}/reservas`)
  }

  getFiltros(data):Observable<Reserva[]>{
    let dateAtual = new Date();
    data = data ? data :  dateAtual;
    return this.http.get<Reserva[]>(`${this.api_url}/reservas/filtro`, 
      {params: {dataReserva: data}}
    )
  }

  atualizarReserva(item: Reserva):Observable<any>{
    return this.http.put<any>(`${this.api_url}/reservas/${item.idReserva}`, {status:item.status});
  }
  
}
